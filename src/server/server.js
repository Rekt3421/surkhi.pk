const {ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
const Mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const PostModel = require('./models/Post');

const connectToDB = async () =>{
    const dbName = 'heroku_gf80xbqf';
    const dbUser = 'adminuser';
    const dbPassword = 'surkhi12345';
    Mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds251877.mlab.com:51877/${dbName}`, {
        useNewUrlParser: true
    }, function(error){
            if(error)
                console.log(error);
            else
                console.log("connected to database");
    });
    
}

const startServer = async() => {
    let last_key = 0
    let loaded = false

    let typeDefs = gql`
        
        type Post {
            key: Int
            postTitle: String
            postSummary: String
            verdict: String
            category: [String]
            image: String
        }
        type Query {
            posts: [Post]
        }
        type Mutation {
            addPost(postTitle: String!, category: [String!]!, postSummary: String!, image: Upload!, verdict: String!): Post
        }
    `;

    const storeUpload = ({ readStream, path }) =>
        new Promise((resolve, reject) =>
            readStream
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve())
            .on("error", reject)
        );

    const resolvers = {
        Query: {
            posts: async () =>{ 
                let posts = await PostModel.find().exec()
                return posts
            },
        },

        Mutation: {
            addPost: async (_, {postTitle, category, postSummary, image, verdict}) => {
                if (!loaded){
                    let lastPost = await PostModel.find({}).sort({key:-1}).limit(1)
                    loaded = !loaded
                    if (lastPost != 0){
                        last_key = lastPost[0].key+1
                        console.log(last_key)
                    }
                }
                let imgFile = await image
                var re = /(?:\.([^.]+))?$/;
                let ext = re.exec(imgFile.filename)[1] // extension of file
                let fileNameWrite = 'img'+last_key+'.'+ext
                let path = './server-images/'+fileNameWrite
                let readStream = imgFile.createReadStream(imgFile.filename)
                
                await storeUpload({readStream, path})
                
                const p = {'key': last_key++, 'postTitle': postTitle, 'category': category, 'postSummary': postSummary, 'image': fileNameWrite, 'verdict': verdict+'.png'}
                const postModel = new PostModel(p)
                await postModel.save()
            }
        }
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: {
            endpoint: `https://surkhi-beta.herokuapp.com/graphql`,
            settings: {
            'editor.theme': 'dark'
            }
        }
    });


    var app = express();
    app.use(cors())
    server.applyMiddleware({ app: app })

    const PORT = process.env.PORT || 4000;
    console.log("The Port: ", process.env.PORT);
    app.listen(PORT, ()=> {console.log("App started")})
}

const dbConnectAndStartServer = async () => {
    try {
        connectToDB();
        console.log('Connected to Mongo successfully');
        startServer();
    } catch (err) {
        console.error(`Error connecting to mongo - ${err.message}`);
        process.exit(1);
    }
};
    
dbConnectAndStartServer();

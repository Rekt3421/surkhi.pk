const {ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
const Mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const PostModel = require('../db/models/Post');

const connectToDB = async () =>{
    const dbName = 'heroku_n827ml81';
    const dbUser = 'adminuser';
    const dbPassword = 'surkhi12345';
    Mongoose.connect(`mongodb://${dbUser}:${dbPassword}@ds261838.mlab.com:61838/${dbName}`, {
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
      {
        console.log(path ," ", readStream)
        new Promise((resolve, reject) =>
            readStream
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve())
            .on("error", reject)
                 
       
       )};

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
               
                let ext = re.exec(imgFile.filename)[1]
                let filename = imgFile.filename // extension of file
                let fileNameWrite = filename
                let path = '../src/assets/server-images/'+fileNameWrite
                let readStream = imgFile.createReadStream(imgFile.filename)
                console.log("Uploading file .....")
                await storeUpload({readStream, path})
                
                const p = {'key': last_key++, 'postTitle': postTitle, 'category': category, 'postSummary': postSummary, 'image': fileNameWrite, 'verdict': verdict+'.png'}
                const postModel = new PostModel(p)
                await postModel.save()
            }
        }
    }

    var app = express();
    
    // if (process.env.NODE_ENV === 'production') {
    //     app.use(express.static('client/build'));
    //   }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        engine: {
            apiKey: "service:hamza121star-5871:kyOXclZ4Iiit4D7BMpLayw",
        },
        introspection:true,
        playground: true
    });


    const graphqlPath = process.env.REACT_APP_GRAPHQL || 'graphql'
    server.applyMiddleware({ 
        path: `/${graphqlPath}`,
        app
        
    })
    app.use(cors())
    const PORT = process.env.PORT || 4000;
    console.log("The Port: ", PORT);
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

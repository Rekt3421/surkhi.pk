const {ApolloServer, gql} = require('apollo-server-express');
const express = require('express');
const Mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const PostModel = require('./models/Post');

var app = express()
app.use(cors())

Mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let last_key = 0
let loaded = false

const typeDefs = gql`
    
    type Post {
        key: Int
        title: String
        summary: String
        verdict: String
        category: [String]
        image: String
    }

    type Query {
        posts: [Post]
    }

    type Mutation {
        addPost(title: String!, category: [String!]!, summary: String!, image: Upload!, verdict: String!): Post
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
            posts = await PostModel.find().exec()
            return posts
        },
    },

    Mutation: {
        addPost: async (_, {title, category, summary, image, verdict}) => {
            if (!loaded){
                lastPost = await PostModel.find({}).sort({key:-1}).limit(1)
                loaded = !loaded
                if (lastPost!=0){
                    last_key = lastPost[0].key+1
                    console.log(last_key)
                }
            }
            imgFile = await image
            var re = /(?:\.([^.]+))?$/;
            ext = re.exec(imgFile.filename)[1] // extension of file
            fileNameWrite = 'img'+last_key+'.'+ext
            path = './server-images/'+fileNameWrite
            readStream = imgFile.createReadStream(imgFile.filename)
            
            await storeUpload({readStream, path})
            
            const p = {'key': last_key++, 'title': title, 'category': category, 'summary': summary, 'image': fileNameWrite, 'verdict': verdict+'.png'}
            const postModel = new PostModel(p)
            await postModel.save()
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: `http://localhost:4000/graphql`,
        settings: {
          'editor.theme': 'dark'
        }
      }
});

server.applyMiddleware({
    app: app
})

app.listen(4000 , ()=> {console.log("App started")})
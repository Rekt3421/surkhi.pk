import React, {Component} from 'react'
import Post from './Post';

class Posts extends Component {
    render(){
        return this.props.posts.map((post, index) => {
            return (
            <Post 
                click={() => this.props.clicked(index)}
                headline = {post.headline}
                description={post.description} 
                post_image = {post.image}
                key = {post.key}
                verdict = {post.verdict} />
            );
        });
    }

}

export default Posts;
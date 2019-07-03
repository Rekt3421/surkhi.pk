import React, {Component} from 'react';
import '../assets/stylesheets/App.scss';

class Post extends Component{
    render(){
        return(
            <div className="container individual-post" key={this.props.key} onClick={this.props.click}>
                <div className="row h-100">
                <div className="col my-auto">
                    <div className="pic mx-auto"><img src={this.props.post_image} width="80" height="80" alt=""/></div>
                </div>
                <div className="col-6 my-auto">
                    <div className="headline">{this.props.headline}</div>
                    <div className="description">{this.props.description}</div>
                </div>
                <div className="col my-auto">
                    <div className="verdict mx-auto"><img src={this.props.verdict} width="140" height="140" alt=""/></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Post;
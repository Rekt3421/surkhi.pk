import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../assets/stylesheets/App.scss';

const Post = (props) => {
    return(
        <div>
            <div className="container individual-post" key={props.key}>
                <Link to='/posts/:postId'>
                    <div className="row h-100">
                        <div className="col-3 my-auto">
                            <div className="pic mx-auto"><img src={props.image} width="100" height="100" alt=""/></div>
                        </div>
                        <div className="col-6 my-auto">
                            <div className="headline">{props.postTitle}</div>
                            <div className="description">{props.postSummary}</div>
                        </div>
                        <div className="col-3 my-auto verdict">
                            <img src={props.verdict} alt=""/>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Post;
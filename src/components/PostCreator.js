import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary';
import '../assets/stylesheets/post.scss';

// Apollo and Graphql
import {Mutation} from "react-apollo";
import gql from "graphql-tag";

const ADD_POSTS = gql`
    mutation AddPost($title: String!, $category: [String!]!, $summary: String!, $image: Upload!, $verdict: String!){
        addPost(postTitle: $title, category: $category, postSummary: $summary, image: $image, verdict: $verdict){
            postTitle
            category
            postSummary
            image
            verdict
        }
    }
`;

class PostCreator extends Component {
    constructor(props){
        super(props);
        this.state = {

            tags: ['Pakistan'],
            chips: []
        }
    }
    handleTagChange = (tags) => {
        this.setState({tags});
    }

    handleListTagClick(tag) {
        this.setState({tags: [...this.state.tags, tag]}); // keep existing tag and add one to it
    } 

    handleChangeInput = (tag) => {
        this.setState({tag})
    }
    notDuplicate(tags, newTag) {
        return (!tags.includes(newTag) || this.props.allowDuplicates);
    }
    addTag(tag) {
        if (this.notDuplicate(this.state.tags, tag)) {
            this.setState({tags: [...this.state.tags, tag], inputValue: ''}, () => {
                this.handleNewTag(this.state.tags);
            });
        }
    }
    handleTagDelete(index, e) {
        this.deleteTag(index, () => {
            this.props.onTagChange(this.state.tags);
        });
    }
    deleteTag(index, callback) {
        let tags = this.state.tags.slice();
        
        tags.splice(index, 1);
        this.setState({ tags }, () => {
            if (callback) callback();
        });
    }
    


    resetHandler = ({ fields, form }) => {
        this.setState({ password: '' }) // manually reset controlled fields ("password")
    }

    fileUploadHandler = (event) =>{
        console.log(event.target.file)
    }

    render(){
        let titleInput
        let categoryInput
        let summaryInput
        let imageInput
        let verdictInput

        let imageUrl = '';
        let urlChange = (e) => {
            imageUrl = e.target.value;
        }
        const styles = {
            chipsContainer: {
                width: '100%',
                ':focus':{
                    color: '#495057',
                    backgroundColor: '#fff',
                    borderColor: '#80bdff',
                    outline: '0',
                    boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'
                }
            }
        } 
        return(
            <Mutation mutation={ADD_POSTS}>
                {addPost=>(
                    <Aux>
                    <div className="container postcreator-widget">  
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Post Creator Panel</h3>
                            </div>
                            <div className="panel-body">
                            <div className="instructions"> 
                                <p>For editorial purposes only: Please write the <strong>name</strong> and <strong>summary</strong> of the 
                                    article, then choose an appropriate <strong>image</strong> to display. Write the <strong>category</strong> of
                                    the article that it belongs to (You may choose multiple). Lastly, select the <strong>Surkhi 
                                    Rating</strong> before pressing the "Submit" button. You may choose to start over by pressing 
                                    "Reset".
                                </p>
                            </div>
                            <form
                                id = 'post-form' 
                                onSubmit={e=>{
                                    e.preventDefault()
                                    addPost({variables: {title: titleInput.value,
                                                        category: categoryInput,
                                                        summary: summaryInput.value,
                                                        image: imageInput,
                                                        verdict: verdictInput.value}})
                                    titleInput.value = ""
                                    summaryInput.value = ""
                                    verdictInput.value = ""
                            }}>
                                <div className="row">
                                    <div className="col-sm-6"> 
                                        <div className="form-group">
                                            <label className="control-label">Post Title</label>
                                            <input type="text" 
                                                className="form-control" 
                                                placeholder="Enter first name" 
                                                name="postTitle"
                                                required 
                                                ref = {node=>{
                                                    titleInput = node
                                                }}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="control-label">Select Post Category</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" for="inputGroupSelect01">Category</label>
                                                    <TagInput 
                                                        onTagChange={this.handleTagChange}
                                                        tags = {this.state.tags}
                                                        name = "postCategories"
                                                        ref = {() =>{
                                                            categoryInput = this.state.tags
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="row">
                                    <div className="col-sm-12"> 
                                        <div className="form-group">
                                            <label className="control-label">Post Summary</label>
                                            <input type="textarea" className="form-control" placeholder="Enter Summary..." name="postSummary"
                                            ref = {node=>{
                                                summaryInput = node
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label className="control-label">Post Image</label>
                                        <div class="input-group">
                                            <span class="input-group-prepend">
                                                <span class="btn btn-default btn-file">
                                                    Browse… <input type="file" id="imgInp"
                                                    onChange={({target:{files}})=>{
                                                        imageInput = files[0]
                                                        console.log(imageInput)
                                                    }}/>
                                                </span>
                                            </span>
                                            <input type="text" readOnly/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="control-label">Select Verdict</label>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" for="inputGroupSelect01">Verdict</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01"
                                            ref = {node=>{
                                                verdictInput = node
                                            }}>
                                                <option selected>Choose...</option>
                                                <option value="KharaSuch">Khara Such</option>
                                                <option value="Such">Such</option>
                                                <option value="Mumkin">Mumkin</option>
                                                <option value="Jhoot">Jhoot</option>
                                                <option value="FullJhoot">Jhootay Ka Muun Kala</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="panel-footer">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="pull-right">
                                        <button type="button" className="btn btn-danger reset" onReset={this.resetHandler}>Reset</button>
                                        <button type="submit" className="btn btn-success submit" form='post-form'>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Aux>
                )}
        </Mutation>
        );
    }

}

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputValue: '',
        tags: this.props.tags || []
        }
    }

    handleNewTag = (tags) => {
        if (this.props.onNewTag) this.props.onNewTag(tags);
        if (this.props.onTagChange) this.props.onTagChange(tags);
    }

    handleInputChange = ({target: { value: inputValue }}) => {
        inputValue = inputValue == ',' ? '' : inputValue;
        this.setState({inputValue});
    }

    handleKeyDown = e => {
        let { key, target: {value} } = e;
        let { tags } = this.state;
        switch (key) {
        case 'Tab':
            if (value) e.preventDefault();
        case 'Enter':
        case ',':
            value = value.trim();
            if (value && this.notDuplicate(tags, value)) {
            this.addTag(value);
            } else {
            this.setState({inputValue: ''})
            }
            break;
        case 'Backspace':
            if (!value) {
            this.handleTagDelete(tags.length - 1);
            }
            break;
        default:
        }
    }

    handleTagDelete = (index, e) => {
        this.deleteTag(index, () => {
        this.props.onTagChange(this.state.tags);
        });
    }

    deleteTag = (index, callback) => {
        let tags = this.state.tags.slice();
        tags.splice(index, 1);
        this.setState({ tags }, () => {
        if (callback) callback();
        });
    }

    notDuplicate = (tags, newTag) => {
        return (!tags.includes(newTag) || this.props.allowDuplicates);
    }

    addTag = tag => {
        if (this.notDuplicate(this.state.tags, tag)) {
        this.setState({tags: [...this.state.tags, tag], inputValue: ''}, () => {
            this.handleNewTag(this.state.tags);
        });
        }
    }

    updateControlledTags = tags => {
        if (tags && !Helpers.hasDuplicates(tags)) {
        this.setState({ tags }, () => {
            // this.props.onTagChange(tags);
        });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.updateControlledTags(nextProps.tags);
    }

    render() {
        return (
        <span className="tagInputWrapper">
            <TagsList 
            tags={this.state.tags} 
            onTagDelete={this.handleTagDelete} 
            hashtag={this.props.hashtag}
            />
            <input 
            name="tagInput" 
            className="tagInput" 
            placeholder="enter a tag..." 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            />
        </span>
        );
    }
}
class Helpers {
    static contains(orig, filter) {
        let res = filter.map(item => {
        return orig.includes(item);
        });
        return !res.includes(false);
    }

    static hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
    }


const TagsList = ({tags, onTagDelete, hashtag}) => {
    let list = tags.map((tag, index) => (
    <Tag 
        name={tag} 
        onDelete={onTagDelete} 
        index={index} 
        hashtag={hashtag} />
    ));
    return (
        <ul name="tagsList" className="tagsList">
            {list}
        </ul>
    )
}

const Tag = ({name, index, onDelete, hashtag, hashtagStyle}) => {
    return (
        <li>
            {hashtag && (
                <span style={{color: '#898989', fontWeight: 'bold', ...hashtagStyle}}># </span>
            )}
            {name} 
            <a href="#" onClick={e => onDelete(index, e)}>x</a>
    </li>
    );
}


export default PostCreator;
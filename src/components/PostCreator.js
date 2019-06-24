import React, {Component} from 'react';

class PostCreator extends Component {
    constructor(props){
        super(props);
        this.state = {
            chips: []
        }
    }

    onChange = (chips) => {
        this.setState({chips});
    }
    
    render(){
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
            <div class="container">  
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Panel 1</h3>
                    </div>
                    <div class="panel-body">
                    <div class="alert alert-warning"> Please complete required fields marked in red.</div>
                    <form>
                        <div class="row">
                            <div class="col-sm-6"> 
                                <div class="form-group">
                                    <label class="control-label">Post Title</label>
                                    <input type="text" class="form-control" placeholder="Enter first name" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label class="control-label">Select Post Category</label>
                                <div class="container my-5">
                                    <div id="chips-autocomplete-test" class="chips chips-placeholder chips-autocomplete"></div>
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Category</label>
                                    </div>
                                    {/* <Chips theme={theme.styles}
                                        value={this.state.chips}
                                        onChange={this.onChange}
                                        suggestions={["Pakistan", "Politics", "International Affairs", "Religion", "Economy", "Rumor"]}
                                    /> */}
                                </div>
                            </div> 
                        </div>
            
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="control-label">Post Image</label>
                                <div class="input-group">
                                    <span class="input-group-btn">
                                        <span class="btn btn-default btn-file">
                                            <label class="input-group-text" for="inputGroupSelect01">Browse</label>
                                            <input type="file" id="imgInp" />
                                        </span>
                                    </span>
                                    <input type="text" class="form-control" readOnly />
                                </div>
                                <img id='img-upload'/>
                            </div>
                    
                            <div class="col-sm-6">
                                <label class="control-label">Select Verdict</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Verdict</label>
                                    </div>
                                    <select class="custom-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">Khara Such</option>
                                        <option value="2">Such</option>
                                        <option value="3">Mumkin</option>
                                        <option value="4">Jhoot</option>
                                        <option value="5">Jhootay Ka Muun Kala</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="pull-right">
                                <button type="button" class="btn btn-default reset">Reset</button>
                                <button type="button" class="btn btn-primary submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default PostCreator;
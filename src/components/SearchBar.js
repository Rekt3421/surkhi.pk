import React, {Component} from 'react'
import SurkhiBigImage from '../assets/images/surkhi-meter.png';
import '../index.css';
import $ from 'jquery';
import PropTypes from "prop-types";

class SearchBar extends Component{
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        suggestions: ["Faaiz is old" , "Hamza is older" , "Old is gold wwwweeeeww", "wwweeeesss aasssss", "http://www.google.com", " here comes the rouge knight how do you do?", "what will i do with this thing now it is so confusing"]
      };
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestion list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: ""
        };
      }
    categories = [" in Politics"," in Pakistan"];  
    keyDownHandler = e => {
        
        //this.fetchNewsAuthenticity(url);
          
    
          const { suggestions } = this.props;
          const userInput = e.currentTarget.value;
         // console.log(userInput ,'Userint ')
          // Filter our suggestions that don't contain the user's input
          let filteredSuggestions = suggestions.filter(
            suggestion =>
              suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );
          filteredSuggestions = filteredSuggestions.map( (ele) =>{ 
      
            return this.categories.map((ele2)=>{
            let temp = ele.toLowerCase().split(userInput.toLowerCase())
            let res;
            if (temp.length === 2) {
            res = <p>{temp[0]}<b>{userInput}</b>{temp[1] +ele2}</p>
          }
          else if (temp.length === 3) {
            res = <p>{temp[0]}<b>{userInput}</b>{temp[1]}{userInput}{temp[2] + ele2}</p>
          }
          return res;
        });
        
    });
    console.log(filteredSuggestions)      
          
          // Update the user input and filtered suggestions, reset the active
          // suggestion and make sure the suggestions are shown
          this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
          });
       // console.log(filteredSuggestions)
        };
       
        onClick = e => {
            // Update the user input and reset the rest of the state
            this.setState({
              activeSuggestion: 0,
              filteredSuggestions: [],
              showSuggestions: false,
              userInput: e.currentTarget.innerText
            });
          };
          
    
    useEffect = () => {
        $(document).ready(function() {
            $(".search").click(function() {
                $(".search").addClass("active");
                $(".line-1").css({
                transform: "rotate(45deg)",
                top: "0px",
                left: "0px"
                });
                $(".line-2").css({
                height: "40px",
                opacity: "1"
                });
            });
            $(".line-1, .line-2").click(function() {
                $(".search")
                .removeClass("active")
                .val("");
                $(".line-1").css({
                transform: "rotate(-45deg)",
                top: "-20px",
                left: "45px"
                });
                $(".line-2").css({
                height: "0px",
                opacity: "0"
                });
            });
        });
    }
   showsugg = () => {
    let val =[]   
    if(this.state.showSuggestions){
           ///val.append()
          return this.state.filteredSuggestions
           
       }
   }
    render(){ 
        return(
            
            <section className="main-search">
                <div className='centered'>
                    <div className="img-container">
                        <img src={SurkhiBigImage} alt="Surkhi Big Logo" />
                    </div>
                    <div className="search-section" onClick={this.useEffect} >
                        <input type="text" className="search" onKeyDown={this.keyDownHandler}/>
                        <div className ="react-autosuggest__suggestion--focused">{this.showsugg()}</div>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        
                        
                    </div>
                </div>
            </section>
        );
    }
    
}

export default SearchBar;
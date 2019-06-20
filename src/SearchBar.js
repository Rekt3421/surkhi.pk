import React, {Component} from 'react'
import SurkhiBigImage from './assets/images/surkhi-meter.png';
import './App.scss';
import $ from 'jquery';

class SearchBar extends Component{
    keyDownHandler = event => {
        const url = event.target.value;
        console.log(url);
        this.fetchNewsAuthenticity(url);
    }
    effect = () => {
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
    
    render(){ 
        return(
            <section className="main-search">
                <div className='centered'>
                    <div className="img-container">
                        <img src={SurkhiBigImage} alt="Surkhi Big Logo" />
                    </div>
                    <div className="search-section" onClick={this.effect}>
                        <input type="text" className="search" onKeyDown={this.keyDownHandler}/>
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default SearchBar;
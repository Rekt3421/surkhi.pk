import React, {Component} from 'react';
import PostCreator from './PostCreator';
import Navbar from './Navbar';
import Dashboard from './dashboard';
import InfiniteScroll from 'react-infinite-scroller';
import SearchBar from './SearchBar';
import '../App.scss';
import F from '../assets/images/F.png'
import logo from '../assets/images/logo.svg';



class Home extends Component{
    state={
        scorecards: [],
        page: 5,
        total: 25,
        moar: true
    }
    loadFunc=()=>{
        setTimeout(()=>{
            let pages = this.state.page
            pages+=5
            this.setState({page: pages})
        },500)
        if (this.state.page>=this.state.total){
            this.setState({moar:false})
        }
    }
    render(){
        for (let i=this.state.page-5;i<this.state.page;i++){
            if (this.state.moar===false){
                break
            }
            console.log(i)
            this.state.scorecards.push({class: "individual-post", key: i})
        }
        // let posts = <Posts 
        //   posts={this.state.scorecards}
        //   key = {card.key}
        // />
        return(
            <div className="app-container">
                <div className="landing-page">
                    <Navbar />
                    <SearchBar />
                </div>
                <Dashboard />
                <PostCreator />
                    <InfiniteScroll pageStart={0} loadMore={this.loadFunc} hasMore={this.state.moar} 
                    loader = {<div className="loader-wheel" key={0}>
                        <i><i><i><i><i><i><i><i><i><i><i><i>
                        </i></i></i></i></i></i></i></i></i></i></i></i>
                        </div> }>
                        {/* {posts} */}
                        {this.state.scorecards.map(card=>{
                        return(
                            <div className="container individual-post" key={card.key}>
                            <div className="row h-100">
                                <div className="col my-auto">
                                <div className="pic mx-auto"><img src={F} width="80" height="80" alt=""/></div>
                                </div>
                                <div className="col-6 my-auto">
                                <div className="headline">Sup</div>
                                <div className="description">Sarfaraz nai dhoka dya, Pakistani team raat ko burger or pizza khati rahee</div>
                                </div>
                                <div className="col my-auto">
                                <div className="verdict mx-auto"><img src={logo} width="140" height="140" alt=""/></div>
                                </div>
                            </div>
                            </div>
                        );
                        })}
                    </InfiniteScroll>
            </div>
        );

        
    }

}

export default Home;
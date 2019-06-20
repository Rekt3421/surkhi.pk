import React from 'react';
import F from './F.png'
import logo from './logo.svg';
import './App.scss';
import InfiniteScroll from 'react-infinite-scroller';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

class App extends React.Component{
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
      this.state.scorecards.push({class: "dawg", key: i})
    }
    return (
      <div className="app-container">
        <div className="landing-page">
          <Navbar />
          <SearchBar />
        </div>
        <InfiniteScroll pageStart={0} loadMore={this.loadFunc} hasMore={this.state.moar} 
          loader={<div className="loader-wheel" key={0}>
              <i><i><i><i><i><i><i><i><i><i><i><i>
              </i></i></i></i></i></i></i></i></i></i></i></i>
            </div> }>

            {this.state.scorecards.map(card=>{
              return(<div className={card.class} key={card.key}>
                      <div className="board">
                        <div className="truth"><img src={logo} width="120" height="120" alt=""/></div>
                        <div className="body">
                          <div className="pic"><img src={F} width="80" height="80" alt=""/></div>
                          <div className="topic">Sup</div>
                          <div className="headline">YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW YAW</div>
                        </div>
                      </div>
                    </div>)
            })}
        </InfiniteScroll>
      </div>
    )
  }

};

export default App;

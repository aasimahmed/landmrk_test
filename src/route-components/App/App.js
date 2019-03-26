import React, { Component } from 'react';
import './App.css';
//FUNCTIONALITY
import { Route, Switch } from "react-router";


//COMPONENTS
import { Nav } from "../../components/Nav/Nav";
import { Home } from "../Home/Home";
import { Search } from "../Search/Search";


class App extends Component {

  state = {

  }

  componentDidMount(){
    //make a fetch for data here and pass as props to Home.
  }
  render() {
    return(
      <div className="container">
      <Nav/>
      <Switch>
        <Route exact path="/" render={(...props) => <Home/>} />
        <Route exact path="/search" render={(...props) => <Search />} />
      </Switch>
      </div>
    )
}
}

export default App;

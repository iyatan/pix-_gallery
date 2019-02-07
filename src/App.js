import React, { Component } from "react";
import "./App.css";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrap">
          <div className="search">
            <input className="searchBar" placeholder="type your search" />
            <input type="submit" className="button" name="searchB" />
          </div>
        </div>
        <Search />
      </div>
    );
  }
}

export default App;

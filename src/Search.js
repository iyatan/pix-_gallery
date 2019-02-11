import React, { Component } from "react";
import Download from "./Download";
import "./App.css";

const clientId =
  "fd8901dcc42a9134285142cf84406ef4a9823f7e60bc136a3fcd7e59744ab7cd";
const endpoint = "https://api.unsplash.com/search/photos";

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      images: []
    };

    this.query = "";
    this.trackQueryValue = this.trackQueryValue.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.fetchData();
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        this.setState({
          images: jsonResponse.results
        });
      })
      .catch(err => {
        console.log("Error happened during fetching!", err);
      });
  }
  trackQueryValue(ev) {
    this.query = ev.target.value;
  }
  images() {
    return this.state.images.map(image => {
      return (
        <div key={image.id}>
          {" "}
          <img alt="No Pic:(" src={image.urls.regular} />
          <Download image={image} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="Wrap">
            <div className="search">
              <input
                onChange={this.trackQueryValue}
                className="searchBar"
                placeholder="type your search"
                onKeyPress={this._handleKeyPress}
              />
              <input
                onClick={this.fetchData}
                type="submit"
                className="buttonS"
                name="searchB"
                value="Search"
              />
            </div>
            <p>Search And Download All Sorts of Images</p>
          </div>
          <div className="wrapper2">
            <div className="searchRes">{this.images()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

import React, { Component } from "react";
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
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
      return <img alt="No Pic:(" src={image.urls.thumb} />;
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.trackQueryValue} />
        <button type="submit" onClick={this.fetchData}>
          nnn
        </button>
        <div>{this.images()}</div>
      </div>
    );
  }
}

export default Search;

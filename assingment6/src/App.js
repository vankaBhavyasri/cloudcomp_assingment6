import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.alertHi = this.alertHi.bind(this);
    this.state = {
      term: '',
      img: '',
	  render: false
    };
  }


alertHi() {
 this.setState({render: !this.state.render});
}


  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term: '', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
	    <h4> click button to pull covid data </h4>
           <button onClick={this.alertHi}>Get Data!r</button>
              {this.state.render && <h1>Hi</h1>}
        <img src={this.state.img} height="200" alt={this.state.term} />
      </div>
    );
  }
}

export default App;

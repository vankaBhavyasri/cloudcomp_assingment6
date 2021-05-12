import React, { Component } from 'react';
import './App.css';
import { Bar } from "react-chartjs-2";

class App extends Component {
  constructor(props) {
    super(props);
    this.alertgetdata = this.alertgetdata.bind(this);
    this.state = {
	  render: false,
      isLoaded: false,
      items: [],
	  label: ['64109'],
	  datasets: [
      {
      label: '64109',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
    };
}


alertgetdata() {
 console.log('data pull has been triggered') 
 this.setState({render: !this.state.render});
    fetch("https://data.kcmo.org/resource/98fz-2jyt.json?zipcode=64109")
	.then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
		  });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log("API output")
	  console.log(this.state.items)
	  console.log("zip codes")
	  console.log(this.state.datasets)
}


  render() {
    return (
      <div className="App">
          <h4> click button to pull covid data </h4>                                                                <button onClick={this.alertgetdata}>Get Data!r</button>
                {this.state.render && 
		  <Bar
          data={this.state.datasets}
          options={{
            title:{
              display:true,
              text:'covid case by zip code in KC',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />}
      </div>
    );
  }
}

export default App;

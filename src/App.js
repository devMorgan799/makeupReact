import React, { Component } from 'react';
import axios from "axios";
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      data: []
    }
  }

  componentDidMount() {
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then(res => {
      const makeupInfo = res.data;
      // console.log("makeupInfo ---->", makeupInfo)
      
      this.setState({data: makeupInfo})
      // console.log(this.state.data)
      //this.state.data is the same info as makeupInfo. the data is 
      //just placed in diff. locattion. the state places info into app

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }


  render() {
    return (
      <div className= "lipPicture">
        {/* <Home makeupDetails= {this.state.data}/> */}
      <nav className= "navbar">

        <h2 className= "link">
          <link to= "/About"> About </link>
          <link to= "/Home">Home</link>
          <link to= "makeupBrands">Makeup Brands</link>

        </h2>



      </nav>
      </div>
      
     
    );
  }
}

export default App;





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

    })
    .catch(error => {
      console.log('there is an eror', error)
    })

  }


  render() {
    return (
      <div className= "lipPicture">
        {/* <Home makeupDetails= {this.state.data}/> */}

      </div>
    );
  }
}

export default App;





import React, { Component } from 'react';
import axios from "axios";
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MakeupBrands from './components/MakeupBrands';
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
      <Router>
      <div className= "lipPicture">
        {/* <Home makeupDetails= {this.state.data}/> */}
      <nav className= "navbar">

        <h2 className= "link">
          <ul>
          <li><Link to= "/Home">Home</Link></li>
          <li><Link to= "/About"> About </Link></li>
          <li><Link to= "makeupBrands">Makeup Brands</Link></li>
          </ul>
        </h2>
      </nav>
      </div>

      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/MakeupBrands" component={MakeupBrands}/>

      </Switch>

      </Router>
     
    );
  }
}

export default App;





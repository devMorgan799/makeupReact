import React, { Component } from 'react';
import axios from "axios";


class MakeupBrands extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
          data: [],
          brand: [],
    
        }
      }

  componentDidMount() {
    // axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.state.brand}&tag_list=organic`)
     axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&tag_list=organic")
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
  onChange = (event) => (this.setState({[event.target.name]: event.target.value })); 
  onSubmit = (event) => {
      event.preventDefault();
      this.setState({[event.target.name]:event.target.value})
      this.convert()
  }
    render() {
        return (
            <div className="dropdownMenu" onSubmit= {this.onSubmit}>
                <form className= "form">
                    <select className="brandsMenu" name= "brand" onChange={this.onChange}>
                        <option>Makeup Brands</option>
                        <option value= "l'oreal">l'oreal</option>
                        <option value="Maybelline">Maybelline</option>
                        <option value= "Smashbox">Smashbox</option>
                        <option value= "Wetnwild">Wet n Wild</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default MakeupBrands;
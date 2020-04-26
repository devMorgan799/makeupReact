import React, { Component } from 'react';


class Home extends Component {
   
    render() {
        // console.log(this.props.makeupDetails[0]);
        return (
            <div>
               {/* <h1>{this.prop.brands.brand}</h1>  */}
               <h1>Look up eco-friendly makeup from the brands below</h1>
               <div className="dropdownMenu">
                   <select className="brandsMenu" onChange={this.onChange}>
                   <option>Makeup Brands</option>
                   <option>l'oreal</option>
                   <option>Maybelline</option>
                   <option>Smashbox</option>
                   <option>Wet n Wild</option>

                   </select>
                </div>
            </div>
        );
    }
}

export default Home;
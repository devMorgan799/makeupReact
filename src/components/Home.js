import React, { Component } from 'react';


class Home extends Component {
   
    render() {
        console.log(this.props.makeupDetails[0]);
        return (
            <div>
               {/* <h1>{this.prop.brands.brand}</h1>  */}
            </div>
        );
    }
}

export default Home;
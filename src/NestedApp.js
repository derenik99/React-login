import { Component } from "react";

class Nested extends Component  {
  constructor(props) {
    super(props)
    console.log('constructor 2')
  }

  componentDidUpdate() {
      console.log('Did updated');
  }
    render() {
      return (
        <>
          <h1>{this.props.value}</h1>
        </>
      )
    }
} 

export default Nested
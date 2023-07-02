import React, { Component } from "react";


export class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
    }
  }

  render() {
    const {age} = this.state;
    const birthday = () => this.setState({age: this.state.age + 1});

    return <fieldset>
        <h1>{this.props.lastName}, {this.props.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <button onClick={birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </fieldset>;
  }
}

export default PersonCard;

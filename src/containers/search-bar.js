import React, { Component } from "react";

export default class SearchBar extends Component {

  constructor(props) {
    console.log("Inside SearchBar constructor");
    super(props);
    this.state = { term: "" }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form className="input-group">
      <input
        className="form-control"
        placeholder="Search for..."
        value={this.state.term}
        onChange={this.handleInputChange}
      />
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );

  }

}

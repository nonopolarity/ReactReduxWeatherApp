import React, { Component } from "react";

export default class SearchBar extends Component {

  constructor(props) {
    console.log("Inside SearchBar constructor");
    super(props);
    this.state = { term: "" }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(event) {
    console.log("In handleInputChange", event.target.value, event.currentTarget, event.target);
    this.setState({ term: event.target.value })
  }

  handleFormSubmit(event) {
    console.log("In handleSubmit", event);
    //debugger;
    event.preventDefault();
    //this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.handleFormSubmit}>
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

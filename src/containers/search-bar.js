import React, { Component } from "react";

export default class SearchBar extends Component {

  render() {
    return (
      <form className="input-group">
      <input className="form-control" placeholder="Search for..."/>
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );

  }

}

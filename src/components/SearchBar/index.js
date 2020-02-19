import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
export default function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language"/>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search Employees"
          id="term"
        />
      </div>
    </form>
  );
}
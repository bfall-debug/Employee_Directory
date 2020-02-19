import React from "react";
import "./style.css";
import SearchBar from "../SearchBar";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <SearchBar/>
    </nav>
  );
}

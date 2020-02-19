import React from "react";
import "./style.css";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar text-center navbar-expand-lg navbar-light ">
            Employee Directory
        </nav>
        <div className="searchContainer">
          <SearchBar/>
        </div>
        
    </div>
    
  );
}

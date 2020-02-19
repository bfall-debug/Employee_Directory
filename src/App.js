import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Home/>
      </Wrapper>
    </div>
  );
}

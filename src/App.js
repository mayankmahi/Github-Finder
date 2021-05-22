import React, { Component } from "react";
import "./App.css";

// Components
import Navbar from "./components/layout/Navbar";
import UserItems from './components/users/UserItems';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItems />
      </div>
    );
  }
}

export default App;

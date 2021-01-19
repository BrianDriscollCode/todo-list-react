import React, { Component } from 'react';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import styles from "./styles/styles.css"
import ToDoSection from "./Components/ToDoSection"



class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

  render() {
    return(
      <div className="App">
          <Header />
          <div className="pageWrapper">
              <Sidebar />
              <ToDoSection />
          </div>
      </div>
    )
  }

};

export default App;

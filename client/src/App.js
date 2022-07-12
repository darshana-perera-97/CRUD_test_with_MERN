import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SingleToDo from "./Design/SingleToDo";

function App() {
  const [text, setText] = React.useState("");
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Write something ..."
        onChange={(e) => setText(e.target.value)}
      />
      <SingleToDo />
    </div>
  );
}

export default App;

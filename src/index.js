import React from 'react';
import { useState } from "react";
import { render } from "react-dom";
import Modal from "./lib";

/**
 * 
 * @returns {JSX} App component
 */
const App = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  return <div style={{ width: "100%", display:"flex", justifyContent:"center"}}>
    <button onClick={() => setModalDisplay(true)}>Open Modal</button>
    <Modal action={() => setModalDisplay(false)} display={modalDisplay} message={"Employee successfully created."}/>
  </div>
};

render(<App />, document.getElementById("root"));

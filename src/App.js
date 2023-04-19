import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CounterContext from "./contextapi/counterContext";
import CompC from "./components/CompC";
import Main from "./components/Main";
import ReduxComp from "./components/ReduxComp";

function App() {
  return (
    <>
      {/* <CounterContext.Provider value={counter}>
        <CompC />
        <button onClick={() => setCounter(counter + 1)}>INCRE</button>
      </CounterContext.Provider> */}
      {/* <Main /> */}
      <ReduxComp />
    </>
  );
}

export default App;

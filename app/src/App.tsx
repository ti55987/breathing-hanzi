import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import WordContainer from "./components/word_container";
import Tester from "./components/tester_container";
import Navbar from "./components/navbar";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path={"/hanzi/:word"}>
            <WordContainer />
          </Route>
          <Route exact path={"/hanzi/:word/test"}>
            <Tester />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>有生命的漢字</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>關於</h2>
    </div>
  );
}

function App() {
  return <AppRouter />;
}

export default App;

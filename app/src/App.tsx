import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HanziWriter from "hanzi-writer";

function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於</Link>
          </li>
          <li>
            <Link to="/dashboard">有生命的漢字</Link>
          </li>
        </ul>

        <hr />

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div id="character-target-div">
      <h2>我</h2>
      <button onClick={presentWord}>打開</button>
    </div>
  );
}

function presentWord() {
  var writer = HanziWriter.create("character-target-div", "我", {
    width: 100,
    height: 100,
    padding: 5
  });
  writer.loopCharacterAnimation();
}

function App() {
  return <AppRouter />;
}

export default App;

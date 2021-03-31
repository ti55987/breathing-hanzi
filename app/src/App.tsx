import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WordPresenter from "./components/word_presenter";
import TesterContainer from "./components/tester_container";

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
            <Link to="/hanzi/鼻">有生命的漢字</Link>
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
          <Route path={"/hanzi/:word"} component={WordPresenter} />
          <Route path="/hanzi/:word/test" component={TesterContainer} />
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

function App() {
  return <AppRouter />;
}

export default App;
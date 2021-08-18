import React from "react"
import "./App.scss";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Daniel from './components/Daniel'
import Michael from './components/Michael'
import Peter from './components/Peter'

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/daniel" component={Daniel} />
          <Route exact path="/michael" component={Michael} />
          <Route exact path="/peter" component={Peter} />
        </Switch>
      </main>
    </Router>
  );
}


export default App;

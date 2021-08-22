import React from "react"
import "./styles/App.scss";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Blog from './components/Blog'
import Videos from './components/Videos'
import Demos from './components/Demos'

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/demos" component={Demos} />
        </Switch>
      </main>
    </Router>
  );
}


export default App;

import React from "react"
import "./styles/App.scss";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Blog from './components/Blog'
import Videos from './components/Videos'
import Renders from './components/Renders'

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/renders" component={Renders} />
        </Switch>
      </main>
    </Router>
  );
}


export default App;

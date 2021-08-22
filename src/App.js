import React from "react"
import "./styles/App.scss";
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'
import Info from './components/Info'
import Links from './components/Links'
import Visuals from './components/Visuals'
import Footer from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/visuals" component={Visuals} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}


export default App;

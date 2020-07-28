import React from "react";
import "./App.scss";
import Nav from "./views/Nav";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "@font-awesome-4.7.0/fonts/fontawesome-webfont.woff";
import "@font-awesome-4.7.0/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TourList from "./Process/TourList";
function App() {
  return (
      <div>
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tour" component={TourList} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <br/><br/>
        <footer className='master-footer'>FIT-TDC &copy; 2020</footer>
      </div>
    </Router>
        <h1>àgsagryweyhreuw78rtuj</h1>
      </div>
  );
}

export default App;

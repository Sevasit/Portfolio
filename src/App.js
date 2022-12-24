import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";

const App = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;

import React, { Suspense } from "react";
// import Navbar from "./components/Navbar/Navbar";
import { Switch, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
// import Project from "./components/Project/Project";
// import Contact from "./components/Contact/Contact";

const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Hero = React.lazy(() => import("./components/Hero/Hero"));
const About = React.lazy(() => import("./components/About/About"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const Project = React.lazy(() => import("./components/Project/Project"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));

const App = (props) => {
  return (
    <Suspense>
      <React.Fragment>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home" exact>
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
    </Suspense>
  );
};

export default App;

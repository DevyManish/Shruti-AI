import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chatbot from './Chatbot';
import Home from './Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chatbot">
          <Chatbot />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  )
}

export default App

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chatbot from './Chatbot';
import Home from './Home';
// import Navbar1 from './components/Navbar1';
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
      </Switch>
    </>
  )
}

export default App

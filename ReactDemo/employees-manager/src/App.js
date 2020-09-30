import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Add from './Views/Add'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/add'>
            <Add />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  )
}

export default App

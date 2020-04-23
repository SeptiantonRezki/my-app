import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../About';
import Login from '../Login';
import Beranda from '../About';


function App() {
  return (
    <Router>
        <Fragment>
        <Switch>
            <Route path='beranda' component= {Beranda}/>
            <Route path='about' component= { About }/>
            <Route path='login' component= {Login}/>
        </Switch>
        </Fragment>
    </Router>
);
}

export default App;

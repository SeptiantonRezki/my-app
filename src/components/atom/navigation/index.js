import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About, Beranda, Login } from '../../../organisems/pages';

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path='beranda'>
                    <Beranda />
                </Route>
                <Route path='about'>
                    <About />
                </Route>
                <Route path='login'>
                    <Login />
                </Route>
                <Route path='/'>
                    <Kosong />
                </Route>
            </Switch>
        </Router>
    )
}

function Kosong(){
    return (<div>KOSONG</div>);
}


export default Navigation;
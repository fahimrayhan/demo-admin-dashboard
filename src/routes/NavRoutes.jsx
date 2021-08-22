import About from 'pages/About'
import Contact from 'pages/Contact'
import FAQ from 'pages/FAQ'
import Home from 'pages/Home'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default function NavRoutes() {
    return (
        <div>
           <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/about'><About /></Route>
                <Route exact path='/contact'><Contact /></Route>
                <Route exact path='/faq'><FAQ /></Route>
                {/* <Route path="*">
                    <NotFound />
                </Route> */}
            </Switch>
        </div>
    )
}

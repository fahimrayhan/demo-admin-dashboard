import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavRoutes from './NavRoutes'
import SidebarRoutes from './SidebarRoutes'

export default function MainRoute() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <NavRoutes />
                        <SidebarRoutes />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

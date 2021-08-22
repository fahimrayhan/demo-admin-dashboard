import AllPost from 'pages/AllPost'
import CreatePost from 'pages/CreatePost'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

export default function SidebarRoutes() {
    return (
        <div>
            <Switch>
            <Route exact path='/create-post'><CreatePost /></Route>
            <Route exact path='/all-posts'><AllPost /></Route>
                
            </Switch>
        </div>
    )
}

import React from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Admin from './Components/Admin'
export default(
    <Switch>
    <Route exact path = "/" component = {Home} />
    <Route path = "/admin" component = {Admin} />
    </Switch>
)
import React from 'react';
import Body from './components/body';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Body} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
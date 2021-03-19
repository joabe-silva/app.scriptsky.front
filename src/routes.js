import React from 'react';
import Body from './components/cliente/body';
import Item from './components/cliente/item';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Body } />
            <Route path="/item/:cod_produto" component={ Item } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
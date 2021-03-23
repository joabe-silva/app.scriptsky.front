import React from 'react';
import Main from './components/cliente/main';
import Item from './components/cliente/item';
import Carrinho from './components/cliente/carrinho';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/item/:cod_produto" component={ Item } />
            <Route path="/carrinho" component={ Carrinho } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
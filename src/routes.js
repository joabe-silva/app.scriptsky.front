import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/cliente/main';
import Item from './components/cliente/item';
import Carrinho from './components/cliente/carrinho';
import Login from './components/cliente/login';

import Usuarios from './components/cliente/login/usuarios';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/item/:cod_produto" component={ Item } />
            <Route path="/carrinho" component={ Carrinho } />
            <Route path="/login" component={ Login } />
            <Route path="/usuarios" component={ Usuarios } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
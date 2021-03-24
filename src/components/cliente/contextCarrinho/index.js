import React from 'react';
import { createContext } from 'react';

export const ContextCarrinho = createContext({});

export const ProviderCarrinho = (props) => {

    const item = {
        titulo: 'Bolo teste'
    }

    return(
        <ContextCarrinho.Provider value={{ item }}>
            { props.children }
        </ContextCarrinho.Provider>
    )

}
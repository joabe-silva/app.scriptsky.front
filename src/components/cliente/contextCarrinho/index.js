import React, { useState } from 'react';
import { createContext } from 'react';

export const ContextCarrinho = createContext({});

export const ProviderCarrinho = (props) => {

    const [item, setItem] = useState({
        titulo: 'Bolo Chocolate'
    })

    return(
        <ContextCarrinho.Provider value={{ item, setItem }}>
            { props.children }
        </ContextCarrinho.Provider>
    )

}
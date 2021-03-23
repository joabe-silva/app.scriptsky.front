import { createContext } from 'react';

export const ContextCarrinho = createContext({

});

export const ProviderCarrinho = ({ children }) => {
    return(
        <ContextCarrinho.Provider>
            { children }
        </ContextCarrinho.Provider>
    )
}
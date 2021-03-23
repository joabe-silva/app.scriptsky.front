import { createContext } from 'react';

export const ContextCarrinho = createContext({

});

export const ProviderCarrinho = ({ children }) => {
    const teste = 'Teste OK';

    return(
        <ContextCarrinho.Provider value={{ teste }}>
            { children }
        </ContextCarrinho.Provider>
    )
}
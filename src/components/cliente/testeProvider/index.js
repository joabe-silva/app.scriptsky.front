import React from 'react';
import { ContextCarrinho } from '../contextCarrinho';

function TesteProvider() {

    const item = React.useContext(ContextCarrinho);
    console.log(item)

    return(
        <h2>Item</h2>
    );
}

export default TesteProvider;
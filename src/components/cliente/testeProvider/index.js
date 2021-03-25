import React, { useContext } from 'react';
import { ContextCarrinho } from '../contextCarrinho';

function TesteProvider() {

    const { item, setItem } = useContext(ContextCarrinho);
    //console.log(item)

    alteraDados = () => {
        //setItem({ titulo: 'teste' });
        console.log('deu certo');
    }

    return(
        <div>
            <h3>{ item.titulo }</h3>
            <p>{ item.descricao }</p>
            <p>{ item.preco}</p>
            <p>{ item.quantidade}</p>
            <p>{ item.valorTotal}</p>
            <button onClick={ this.alteraDados }>Alterar</button>
        </div>
    );
}

export default TesteProvider;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Item extends Component {

  state = {
    itens: [],
    itensInfo: [],
  }

  componentDidMount(){
    this.loadItens();
    console.log('item')
  }

  loadItens = async () => {
    
    const { cod_produto } = this.props.match.params;
    const result = await api.get(`/produto/${ cod_produto }`);
    this.setState({ itens: result.data.rows });
    
  };

  render(){

    const { itens } = this.state;

    return (
      
      <div>
          <h2>Item</h2>
      </div>
    
    )

  }
  
}

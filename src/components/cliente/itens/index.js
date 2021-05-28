import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PreCarrinho from '../pre-carrinho';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import Fab from '@material-ui/core/Fab';
import api from '../../../services/api';
import './styles.css';

export default class Itens extends Component {

  state = {
    itens: [],
    url_storage: '',
    url_complet: '',
  }

  async componentDidMount(){

    const result = await api.get('/produtos');

    const parametro = await api.get('/parametro');

    this.setState({ itens: result.data.rows, url_storage: parametro.data[0].url_storage.trim(), url_complet: parametro.data[0].url_complet.trim() });

  }

  render(){

    const { itens, url_storage, url_complet } = this.state;

    return (
      
      <div>
        <Link to={'/'}>
          <Fab size="small" color="primary" aria-label="add">
            <ArrowBack />
          </Fab>
        </Link>

        <List className="list">
          {
            itens.map(itens => (

              <Link 
                to={`/item/${ itens.cod_produto }`} 
                key={ itens.cod_produto } 
                style={{ textDecoration: 'none', color: 'black', }}
              >
                <ListItem button className="itens">
                  <ListItemIcon className="imagemspc">
                    <img id={ itens.cod_produto_grupo } src={`${ url_storage }${ itens.imagem }${ url_complet }`} alt={ itens.titulo } className="imagem" />
                  </ListItemIcon>
                  <ListItemText 
                      className="titulo"
                      primary={ itens.titulo }
                      secondary={`R$ ${ itens.preco }`}
                  />
                </ListItem>
                <Divider />
              </Link>

            ))
          }
        </List>

        <PreCarrinho />
      </div>
    
    )

  }
  
}

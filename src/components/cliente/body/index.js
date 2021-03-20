import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import api from '../../../services/api';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Body extends Component {

  state = {
    itens: [],
  }

  async componentDidMount(){

    const result = await api.get('/produtos');
    this.setState({ itens: result.data.rows });

  }

  render(){

    const { itens } = this.state;

    return (
      
      <div>
          <List className="list">
            {
              itens.map(itens => (

                <Link to={`/item/${ itens.cod_produto }`} key={ itens.cod_produto } style={{ textDecoration: 'none', color: 'black', }}>
                    <ListItem button className="itens">
                      <ListItemIcon className="imagemspc">
                          <img src={`${url_storage}${itens.imagem}${url_complet}`} alt={ itens.titulo } className="imagem" />
                      </ListItemIcon>
                      <ListItemText 
                          className="titulo"
                          primary={ itens.titulo }
                          secondary={`R$ ${ itens.preco }`}
                      />
                    </ListItem>
                </Link>

              ))
            }
          </List>
      </div>
    
    )

  }
  
}

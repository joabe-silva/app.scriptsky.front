import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';
import Container from '@material-ui/core/Container';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Body extends Component {

  state = {
    itens: [],
    itensInfo: [],
  }

  componentDidMount(){
    this.loadItens();
  }

  loadItens = async () => {
    
    const result = await api.get('/produtos');
    this.setState({ itens: result.data.rows });
    
  };

  render(){

    const { itens } = this.state;

    return (
      
      <div>
        <Container maxWidth="sm" justify="center" className="container">
          <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                      Itens
                  </ListSubheader>
              }
              className="list"
              >
              {
                itens.map(itens => (

                  <Link to={`/item/${ itens.cod_produto }`} style={{ textDecoration: 'none', color: 'black', }}>
                    <ListItem button key={ itens.cod_produto } className="itens">

                      <ListItemIcon className="imagemspc">
                          <img src={ url_storage+itens.imagem.trim()+url_complet } alt={ itens.titulo } className="imagem" />
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
        </Container>
      </div>
    
    )

  }
  
}

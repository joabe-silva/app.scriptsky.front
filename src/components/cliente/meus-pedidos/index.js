import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import api from '../../../services/api';
import jwt from 'jwt-decode';
import './styles.css';

export default class MeusPedidos extends Component {

  state = {
    pedidos: [],
    mensagem: ''
  }

  async componentDidMount(){

    //Verifica se o usuario esta logado
    if(localStorage.getItem('tokenScriptsky') === null) {
      window.location.replace('/login')
    } else {

      //Configura token no cabecalho da requisicao
      api.interceptors.request.use(
        config => {
            config.headers['x-access-token'] = localStorage.getItem('tokenScriptsky');
            return config;
        },
        error => {
            return Promise.reject(error);
        }
      );

      const { cod_entidade } = jwt(localStorage.getItem('tokenScriptsky'))

      const result = await api.get('/pedidos-entidade/'+cod_entidade);

      //Verifica se o usuario possui pedidos
      if(result.data.length !== 0) {
        //Verifica se o token é valido
        if(result.data === 'Token invalido! Favor fazer login novamente.') {
          window.location.replace('/login')
        } else {
          this.setState({ pedidos: result.data, mensagem: '' });
        } 
      } else {
        this.setState({ mensagem: 'Você ainda não possui nenhum pedido!' });
      }
      
    }

  }

  render(){

    const { pedidos, mensagem } = this.state;

    return (
      
      <div>

        <Link to={'/'}>
          <Fab size="small" color="primary" aria-label="add">
            <ArrowBack />
          </Fab>
        </Link>

          <Typography color="primary" variant="h6" component="h2">
            { mensagem }
          </Typography>

          <List className="list">
            {
              pedidos.map(pedidos => (

                <Link to={`/item/${ pedidos.cod_pedido }`} key={ pedidos.cod_pedido } style={{ textDecoration: 'none', color: 'black', }}>
                    <ListItem button className="itens">
                      <ListItemText 
                        className="titulo"
                        primary={`#${ pedidos.cod_pedido }`}
                      />
                      <ListItemText 
                        primary={ pedidos.data_criacao }
                        secondary={`Pagamento: ${ pedidos.cod_parametro_forma_pagamento }`}
                      />
                      <ListItemText 
                        primary={`Total R$ ${ pedidos.valor_total }`}
                        secondary={`Status: ${ pedidos.situacao }`}
                      />
                    </ListItem>
                    <Divider />
                </Link>

              ))
              }
          </List>
      </div>
    
    )

  }
  
}

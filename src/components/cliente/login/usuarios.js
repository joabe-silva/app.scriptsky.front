import React, {Component} from 'react';
import api from '../../../services/api';
import jwt from 'jwt-decode';

export default class Body extends Component {

  state = {
    usuarios: [],
  }

  async componentDidMount(){
    
    //Cria cabeçalho x-access-token para enviar token nas requisicoes
    api.interceptors.request.use(
      config => {
          config.headers['x-access-token'] = localStorage.getItem('tokenScriptsky');
          return config;
      },
      error => {
          return Promise.reject(error);
      }
    );
    
    //Acessando rotas privadas graças ao token
    const result = await api.get('/entidades');

    if(result.data === 'Sua sessão inspirou! Favor fazer login novamente.') {
      console.log('Sua sessão inspirou! Favor fazer login novamente.')
    }else{
      if(result.data === 'Token invalido! Favor fazer login novamente.') {
        console.log('Token invalido! Favor fazer login novamente.')
      } else {
        this.setState({ usuarios: result.data });
      }
    }
    const user = jwt(localStorage.getItem('tokenScriptsky')) //Resgata codigo do usuario do token
    console.log(user.cod_entidade)

    console.log(localStorage.getItem('tokenScriptsky'))
  }

  render(){

    const { usuarios } = this.state;

    return (
      
      <div>
        {
          usuarios.map(usuarios => (

            <h2>{ usuarios.cod_entidade }</h2> 

          ))
        }
      </div>
    
    )

  }
  
}

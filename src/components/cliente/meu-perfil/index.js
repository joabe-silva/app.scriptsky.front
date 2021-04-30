import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import api from '../../../services/api';
import jwt from 'jwt-decode';
import './styles.css';

export default class MeuPerfil extends Component {

  state = {
    entidade: [],
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

      const result = await api.get('/entidade/'+cod_entidade);

      //Verifica se o usuario possui pedidos
      if(result.data.length !== 0) {
        //Verifica se o token é valido
        if(result.data === 'Token invalido! Favor fazer login novamente.') {
          window.location.replace('/login')
        } else {
          this.setState({ entidade: result.data[0] });
        } 
      } 
      
    }

    /*
    async updateCampos(){
      
    }
    */

  }

  render(){

    const { entidade } = this.state;

    return (
      
      <div>

          <Link to={'/'}>
            <Fab size="small" color="primary" aria-label="add">
              <ArrowBack />
            </Fab>
          </Link>

          <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Cadastro
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="nome" value={ entidade.nome } placeholder="Nome" onChanger={ updateCampos } required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="text" id="contato" label="Contato" placeholder="(99)99999-9999" required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="email" id="email" label="E-mail" required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="password" id="senha" label="Senha" required fullWidth/>
                    </Grid>
                </Grid>  
            </CardContent>
            <br />
            <CardActions>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button type="buttom" variant="contained" color="primary" onClick={ 0 } fullWidth>
                            Atualizar
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
          </Card> 
          
      </div>
    
    )

  }
  
}

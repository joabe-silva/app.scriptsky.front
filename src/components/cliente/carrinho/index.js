import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Carrinho extends Component {

  state = {
    itens: [],
  }

  async componentDidMount(){

    this.setState({ itens: JSON.parse(localStorage.getItem('CarrinhoScriptsky')) });

  }

  removerItemCarrinho = (cod_produto) => {
    console.log(cod_produto)
  }

  render(){

    const { itens } = this.state;

    return (
      
      <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Link to={'/'}>
                <Fab size="small" color="primary" aria-label="add">
                  <ArrowBack />
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={9}>
              <Typography color="primary" variant="h4" component="h2">
                Carrinho
              </Typography>
            </Grid>
          </Grid>

          <List className="list">
            {
              itens.map(itens => (

                <ListItem button className="itens">
                  <ListItemIcon className="imagemspc">
                    <img src={`${ url_storage }${ itens.imagem }${ url_complet }`} alt={ itens.titulo } className="imagem" />
                  </ListItemIcon>
                  <ListItemText 
                    className="titulo"
                    primary={ itens.titulo }
                    secondary={`Qtd ${ itens.quantidade } Unid R$ ${ itens.preco } Total R$ ${ itens.valor_total }`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => this.removerItemCarrinho(itens.cod_produto) }>
                      <DeleteIcon color="primary" />
                    </IconButton>
                  </ListItemSecondaryAction>
               </ListItem>
            
              ))
            }
          </List>
      </div>
    
    )

  }
  
}

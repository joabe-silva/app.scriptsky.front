import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/AddRounded';
import Remove from '@material-ui/icons/RemoveRounded';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import TextField from '@material-ui/core/TextField';
import api from '../../../services/api';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Item extends Component {

  state = {
    item: [], 
    quantidade: 1,
    valorUnitario: 0,
  };

  async componentDidMount(){

    const { cod_produto } = this.props.match.params;

    const response = await api.get(`/produto/${ cod_produto }`);

    this.setState({ item: response.data[0], valorUnitario: response.data[0].preco });

  }

  adicionarItem = () => {
    this.setState({ quantidade: this.state.quantidade + 1 });
  }

  removerItem = () => {
    if(this.state.quantidade > 1){
      this.setState({ quantidade: this.state.quantidade - 1 });
    }
  }

  adicionarItemCarrinho = () => {

    let itens = [];

    let item = {
      cod_produto: this.state.item.cod_produto,
      imagem: this.state.item.imagem,
      titulo: this.state.item.titulo,
      preco: this.state.valorUnitario,
      observacao: document.getElementById('observacao').value,
      quantidade: document.getElementById('quantidade').value,
      valor_total: document.getElementById('valorTotal').value,
    }

    itens = item
    
    if(localStorage.getItem('CarrinhoScriptsky')) {
     
      localStorage.setItem(
        'CarrinhoScriptsky',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('CarrinhoScriptsky')),
          itens
        ])
      );
      

    } else {
      localStorage.setItem('CarrinhoScriptsky', JSON.stringify([itens]))
    }
    
    window.location.replace('/')
  }

  render(){

    const { item, quantidade, valorUnitario } = this.state;

    return (
      <div>
        <Link to={'/'}>
          <Fab size="small" color="primary" aria-label="add">
            <ArrowBack />
          </Fab>
        </Link>
        
        <Card className="card">
          <CardActionArea>
            <CardMedia>
              <img src={ url_storage+item.imagem+url_complet } alt={ item.titulo } className="imagem" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                { item.titulo }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                { item.descricao }
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="observacao"
                  label="Observação"
                  multiline
                  rowsMax={2}
                  className="observacao"
                />  
              </Grid>
              <Grid item xs={12} className="actions">
                <Button size="large" color="primary" onClick={ this.removerItem }>
                  <Remove />
                </Button>
                <Button id="quantidade" size="large" color="primary" value={quantidade}>
                  { quantidade }
                </Button>
                <Button size="large" color="primary" onClick={ this.adicionarItem }>
                  <Add />
                </Button>
              </Grid>
              <Grid item xs={12} className="actions">
                <Button size="large" color="primary" onClick={ this.adicionarItemCarrinho }>
                  Adicionar
                </Button>
                <Button id="valorTotal" size="large" color="primary" value={ valorUnitario * quantidade }>
                  R$ { valorUnitario * quantidade }
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </div>
      
    )

  }
  
}

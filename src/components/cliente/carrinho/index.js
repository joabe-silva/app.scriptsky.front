import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowBack from '@material-ui/icons/ArrowBackIosRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Carrinho extends Component {

  state = {
    itens: [],
    formasPagamento: [],
    mensagem: '',
    display: '',
    retiradaLocal: false,
    frete: 10.00,
    total: 0,
  }

  componentDidMount(){

    const itens = JSON.parse(localStorage.getItem('CarrinhoScriptsky'))
    //Verificar se existe itens no carrinho no LocalStorage
    if(itens !== null) {
      if(itens.length !== 0) {

        let totalItens = 0
        //Soma valor total de todos os itens 
        itens.map(itens => (
          totalItens = parseFloat(totalItens) + parseFloat(itens.valor_total) 
        ))
        //Insere valor total + valor do frete no state
        this.setState({ itens: itens, total: totalItens + parseFloat(this.state.frete) });
        
      } else {
        this.setState({ mensagem: 'Você ainda não possui itens em seu carrinho...', display: 'none' });
      }
    } else {
      this.setState({ mensagem: 'Você ainda não possui itens em seu carrinho...', display: 'none' });
    }
    
  }

  removerItemCarrinho = (cod_produto) => {

    const { itens } = this.state;
    let indice = 0
    let array = [] 

    array = itens
    
    /*
      Criamos um novo array com base nos valores do array itens, 
      para removermos somente os itens que serao excluidos desse novo array.
    */
    for (indice; indice < itens.length; indice++) {
      if(array[indice].cod_produto === cod_produto){

        array.splice(indice, 1);
        this.setState({ itens: array })
        
        //Carregamos o novo array no LocalStorage
        localStorage.removeItem('CarrinhoScriptsky')
        localStorage.setItem('CarrinhoScriptsky', JSON.stringify(array))
        //Chamamos o componentDidMount para atualizar o state
        this.componentDidMount()
        
      }
    }

  }

  retiradaLocal = () => {

    if(this.state.retiradaLocal === true) {
      this.setState({ retiradaLocal: false, frete: 10, total: this.state.total + 10 }) 
    } 
    if(this.state.retiradaLocal === false) { 
      this.setState({ retiradaLocal: true, frete: 0, total: this.state.total - 10 }) 
    }
     
  }

  render(){

    const { itens, mensagem, display, retiradaLocal, frete, total } = this.state;

    return (
      
      <div>      
          <Link to={'/'}>
            <Fab size="small" color="primary" aria-label="add">
              <ArrowBack />
            </Fab>
          </Link>
            
          <List className="list-itens"
            component="nav"
            aria-labelledby="list-subheader"
            subheader={
              <ListSubheader component="div" id="list-subheader">
                Itens do Carrinho
              </ListSubheader>
            }
          >
            {
              itens.map(itens => (
                <div key={ itens.cod_produto }>
                  <ListItem button className="itens">
                    <ListItemIcon className="imagemspc">
                      <img src={`${ url_storage }${ itens.imagem }${ url_complet }`} alt={ itens.titulo } className="imagem" />
                    </ListItemIcon>
                    <ListItemText 
                      className="titulo"
                      primary={ itens.titulo }
                      secondary={`${ itens.quantidade }X Total R$ ${ itens.valor_total }`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" onClick={() => this.removerItemCarrinho(itens.cod_produto) }>
                        <DeleteIcon color="primary" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider/>
                </div>
              ))
            }
          </List>

          <Typography color="primary" variant="h6" component="h2">
            { mensagem }
          </Typography>

          <div style={{ display: display }} className="margin-top-itens">
            <FormControlLabel
              control={
                <Switch
                  checked={ retiradaLocal }
                  onChange={ this.retiradaLocal }
                  color="primary"
                />
              }
              label="Retirada no local"
            />
          
            <Typography color="primary" variant="h6" >
              Taxa de entrega: R$ { frete }
            </Typography>

            <Typography color="primary" variant="h6" >
              Total: R$ { total }
            </Typography>
              
            <br/>
            <FormControl fullWidth>
              <InputLabel id="forma-pagamento">Forma de pagamento</InputLabel>
              <Select
                labelId="forma-pagamento"
                id="forma-pagamento"
                value={1}
                onChange={0}
              >
                <MenuItem value={1}>A Vista</MenuItem>
                <MenuItem value={2}>Cartão de Crédito - Crédito</MenuItem>
                <MenuItem value={3}>Cartão de Crédito - Débito</MenuItem>
              </Select>
            </FormControl>
            <br/>
            <br/>
            
            <Button fullWidth variant="contained" color="primary">
              Finalizar Pedido
            </Button>
            
          </div>
      </div>
    
    )

  }
  
}

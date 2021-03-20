import React, {Component} from 'react';
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
  };

  async componentDidMount(){

    const { cod_produto } = this.props.match.params;

    const response = await api.get(`/produto/${ cod_produto }`);

    this.setState({ item: response.data[0] });

  }

  render(){

    const { item } = this.state;
  
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
              <img src={url_storage+item.imagem+url_complet} alt={ item.titulo } className="imagem" />
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
              <Grid item xs={12} className="actions">
                <TextField
                  id="observacao"
                  label="Observação"
                  multiline
                  rowsMax={2}
                  className="observacao"
                />  
              </Grid>
              <Grid item xs={12} className="actions">
                <Button size="small" color="primary" >
                  <Remove />
                </Button>
                <Button size="small" color="primary">
                  { 1 }
                </Button>
                <Button size="small" color="primary">
                  <Add />
                </Button>
              </Grid>
              <Grid item xs={12} className="actions">
                <Button size="small" color="primary">
                  Adicionar
                </Button>
                <Button size="small" color="primary">
                  R$ { item.preco }
                </Button>
              </Grid>
            </Grid>

          </CardActions>
        </Card>
      </div>
      
    )

  }
  
}

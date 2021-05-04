import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import api from '../../../services/api';
import './styles.css';

const url_storage = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const url_complet = '?alt=media';

export default class Main extends Component {

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
          <Card elevation={3}>
            <CardContent>
              <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <b>Pedido mínino:</b> R$ 10.00
                  </Grid>
                  <Grid item xs={12}>
                    <b>Endereço:</b> Rua Santa Elisa, 430
                  </Grid>
                  <Grid item xs={12}>
                    <b>Horário:</b> 8:00hr a 18:00hr
                  </Grid>
                  <Grid item xs={12}>
                    <b>Contato:</b> (85) 99999-9999
                  </Grid>
                  {/*
                  
                  <Grid item xs={12}>
                    <b>Funcionamento:</b> 
                  </Grid>
                  <Grid item xs={12}>
                    
                  </Grid>

                  */}
                <Grid item xs={12}>
                  <Accordion elevation={0}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      />
                      <AccordionDetails>
                        <div>
                          <FormLabel component="legend">Funcionamos</FormLabel>
                          <FormControlLabel control={<Checkbox checked />} label="Sug" />
                          <FormControlLabel control={<Checkbox checked />} label="Ter" />
                          <FormControlLabel control={<Checkbox checked />} label="Qua" />
                          <FormControlLabel control={<Checkbox checked />} label="Qui" />
                          <FormControlLabel control={<Checkbox checked />} label="Sex" />
                          <FormControlLabel control={<Checkbox checked />} label="Sab" />
                          <FormControlLabel control={<Checkbox />} label="Dom" />
                        </div> 
                      </AccordionDetails>
                  </Accordion>
                </Grid>          
              </Grid>  
            </CardContent>
          </Card>
          
          <List className="list">
            {
              itens.map(itens => (

                <Link to={`/item/${ itens.cod_produto }`} key={ itens.cod_produto } style={{ textDecoration: 'none', color: 'black', }}>
                    <ListItem button className="itens">
                      <ListItemIcon className="imagemspc">
                          <img src={`${ url_storage }${ itens.imagem }${ url_complet }`} alt={ itens.titulo } className="imagem" />
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
      </div>
    
    )

  }
  
}

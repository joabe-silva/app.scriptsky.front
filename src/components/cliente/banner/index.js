import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import api from '../../../services/api';

export default class Banner extends Component {

  state = {
    parametro: [],
    url_storage: '',
    url_complet: '',
    imagem_01_loja: '',
    imagem_02_loja: '',
    seg: '',
    ter: '',
    qua: '',
    qui: '',
    sex: '',
    sab: '',
    dom: '', 
  }

  async componentDidMount(){

    const result = await api.get('/parametro');
    this.setState({ 

      parametro: result.data[0], 
      url_storage: result.data[0].url_storage.trim(), 
      url_complet: result.data[0].url_complet.trim(), 
      imagem_01_loja: result.data[0].imagem_01_loja.trim(), 
      imagem_02_loja: result.data[0].imagem_02_loja.trim() 
      
    });

    if(result.data[0].funcionamento_semana_seg === 1) {
      this.setState({ seg: 'checked' });
    }
    if(result.data[0].funcionamento_semana_ter === 1) {
      this.setState({ ter: 'checked' });
    }
    if(result.data[0].funcionamento_semana_qua === 1) {
      this.setState({ qua: 'checked' });
    }
    if(result.data[0].funcionamento_semana_qui === 1) {
      this.setState({ qui: 'checked' });
    }
    if(result.data[0].funcionamento_semana_sex === 1) {
      this.setState({ sex: 'checked' });
    }
    if(result.data[0].funcionamento_semana_sab === 1) {
      this.setState({ sab: 'checked' });
    }
    if(result.data[0].funcionamento_semana_dom === 1) {
      this.setState({ dom: 'checked' });
    }

  }

  render(){

    const { 

      parametro, 
      imagem_01_loja, 
      imagem_02_loja, 
      url_storage, 
      url_complet, 
      seg, 
      ter, 
      qua, 
      qui, 
      sex, 
      sab, 
      dom 
    
    } = this.state;

    return (
      
      <Card elevation={3}>
        <CardActionArea>
          <CardMedia
            image={ url_storage+imagem_02_loja+url_complet }
            style={{ height: 140 }}
          >
            <Avatar 
              src={ url_storage+imagem_01_loja+url_complet } 
              style={{ width: 80, height: 80, margin: 'auto', top: 50 }}
            />
          </CardMedia>
        </CardActionArea>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Grid item xs={6}>
              <strong>Pedido mínino: R$ { parametro.pedido_minimo_loja }</strong>
            </Grid>
            <Grid item xs={6}>
              <strong>Taxa de entrega: R$ { parametro.frete }</strong>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid item xs={12}>
                <strong>Endereço: {`${ parametro.endereco_loja }, ${ parametro.numero_loja }` }</strong>
              </Grid>
              <Grid item xs={12}>
                <strong>Horário: {`${ parametro.horario_ini_funcionamento_loja } a ${ parametro.horario_fim_funcionamento_loja }` }</strong>
              </Grid>
              <Grid item xs={12}>
                <strong>Contato: { parametro.contato_loja }</strong>
              </Grid>
              <br/>

              <FormLabel component="legend">
                <strong>Funcionamos</strong>
              </FormLabel>
              <FormControlLabel control={<Checkbox checked={ seg } />} label="Seg" />
              <FormControlLabel control={<Checkbox checked={ ter } />} label="Ter" />
              <FormControlLabel control={<Checkbox checked={ qua } />} label="Qua" />
              <FormControlLabel control={<Checkbox checked={ qui } />} label="Qui" />
              <FormControlLabel control={<Checkbox checked={ sex } />} label="Sex" />
              <FormControlLabel control={<Checkbox checked={ sab } />} label="Sab" />
              <FormControlLabel control={<Checkbox checked={ dom } />} label="Dom" />
            </div> 
          </AccordionDetails>
        </Accordion>
      </Card>
    
    )

  }
  
}

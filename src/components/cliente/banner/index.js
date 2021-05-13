import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import api from '../../../services/api';
import './styles.css';

export default class Banner extends Component {

  state = {
    parametro: [],
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
    this.setState({ parametro: result.data[0] });

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

    const { parametro, seg, ter, qua, qui, sex, sab, dom } = this.state;

    return (
      
      <Card elevation={3}>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <b>Detalhes da Loja</b>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid item xs={12}>
                <b>Pedido mínino: R$ { parametro.pedido_minimo_loja }</b>
              </Grid>
              <Grid item xs={12}>
                <b>Endereço: {`${ parametro.endereco_loja }, ${ parametro.numero_loja}` }</b>
              </Grid>
              <Grid item xs={12}>
                <b>Horário: {`${ parametro.horario_ini_funcionamento_loja } a ${ parametro.horario_fim_funcionamento_loja }` }</b>
              </Grid>
              <Grid item xs={12}>
                <b>Contato: { parametro.contato_loja }</b>
              </Grid>
              <br/>

              <FormLabel component="legend"><b>Funcionamos</b></FormLabel>
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

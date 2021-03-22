import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterListRounded';
import api from '../../../services/api';

export default class Grupos extends Component {

  state = {
    grupos: [],
    open: false,
  }

  async componentDidMount(){
    
    const result = await api.get('/grupos');
    this.setState({ grupos: result.data });
    
  }

  openGrupo = () => {
     this.setState({ open: true });
  }

  closeGrupo = () => {
    this.setState({ open: false});
  }
  
  render(){
    
    const { grupos, open } = this.state;

    return (
        <div>
          <IconButton
            aria-controls="grupo-itens"
            aria-haspopup="true"
            color="inherit"
            onClick={this.openGrupo}
          >
            <FilterListIcon />
          </IconButton>
          <Menu
            id="grupo-itens"
            keepMounted
            open={open}
            onClose={this.closeGrupo}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: '20ch',
              },
            }}
          >
            {grupos.map(grupos => (
              <MenuItem key={grupos.cod_produto_grupo} onClick={this.closeGrupo}>
                {grupos.descricao}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
  }
  
}

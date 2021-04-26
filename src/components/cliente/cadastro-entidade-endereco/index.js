import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AlertErroPreenchaTodoFormulario from '../alert-erro-preencha-todo-formulario';
import api from '../../../services/api';
import jwt from 'jwt-decode';

export default class CadastroEntidade extends Component {
    
    state = {
        alerta: ''
    }

    cadastrar = () => {

        const endereco = {
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            completo: document.getElementById('complemento').value,
            bairro: document.getElementById('bairro').value,
            cep: document.getElementById('cep').value
        }
        
        if(endereco.endereco === '') {

            if(this.state.alerta !== '') {
                this.setState({ alerta: '' })
            } else {
                this.setState({ alerta: <AlertErroPreenchaTodoFormulario /> })
            }

        } else {
            if(endereco.numero === '') {

                if(this.state.alerta !== '') {
                    this.setState({ alerta: '' })
                } else {
                    this.setState({ alerta: <AlertErroPreenchaTodoFormulario /> })
                }
    
            } else {
                if(endereco.completo === '') {

                    if(this.state.alerta !== '') {
                        this.setState({ alerta: '' })
                    } else {
                        this.setState({ alerta: <AlertErroPreenchaTodoFormulario /> })
                    }
        
                } else {
                    if(endereco.bairro === '') {

                        if(this.state.alerta !== '') {
                            this.setState({ alerta: '' })
                        } else {
                            this.setState({ alerta: <AlertErroPreenchaTodoFormulario /> })
                        }
            
                    } else {
                        if(endereco.cep === '') {

                            if(this.state.alerta !== '') {
                                this.setState({ alerta: '' })
                            } else {
                                this.setState({ alerta: <AlertErroPreenchaTodoFormulario /> })
                            }
                
                        } else {
                            console.log('Deu certo mano!')

                            const { cod_entidade } = jwt(localStorage.getItem('tokenScriptsky'))

                        }
                    }
                }
            }
        }
        /*
        api.post('/cadastro-endereco-entidade', endereco).then(res => {
            console.log(res)
        })
        .catch(function (error) {
            console.log(error);
        });
        */
        
    }

    render() {

        const { alerta } = this.state;

        return (

            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Endereço
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={10}>
                                <TextField type="text" id="endereco" label="Endereço" required fullWidth/>
                            </Grid>
                            <Grid item xs={2}>
                                <TextField type="text" id="numero" label="Nº" required fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="text" id="complemento" label="Complemento" required fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="text" id="bairro" label="Bairro" required fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type="text" id="cep" label="Cep" required fullWidth/>
                            </Grid>
                        </Grid>  
                    </CardContent>
                    <br />
                    <CardActions>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button type="buttom" variant="contained" color="primary" onClick={ this.cadastrar } fullWidth>
                                    Cadastrar
                                </Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>

                { alerta }

            </div>

        )
    }

}
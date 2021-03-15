import React from 'react';
import styles from './styles';
import Container from '@material-ui/core/Container';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const URL_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/app-scriptsky.appspot.com/o/';
const URL_COMPL = '?alt=media';

export default function Body() {
  const classes = styles();

  return (
    <div>
      <Container maxWidth="sm" justify="center" className={classes.container}>
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Bolos
                </ListSubheader>
            }
            className={classes.list}
            >
            <ListItem button className={classes.itens}>
                <ListItemIcon className={classes.imagem_space}>
                    <img src={URL_IMAGE+'Sun%20Mar%2014%202021%2017%3A26%3A47%20GMT-0300%20(Hor%C3%A1rio%20Padr%C3%A3o%20de%20Bras%C3%ADlia)-favicon.ico'+URL_COMPL} className={classes.imagem_itens} />
                </ListItemIcon>
                <ListItemText 
                    className={classes.text}
                    primary="Bolo de Maisena"
                    secondary="23.99"
                />
            </ListItem>
        </List>
      </Container>
    </div>
  );
}

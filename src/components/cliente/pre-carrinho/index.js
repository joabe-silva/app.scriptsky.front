import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import styles from './styles';


export default function BottomAppBar() {
  const classes = styles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Link href={'/carrinho'} color="inherit" style={{ textDecoration: 'none' }}> 
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              2x
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              Carrinho
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }}>
              R$ 120
            </Grid>
          </Grid>
        </Toolbar>
      </Link>
    </AppBar>
  );
}

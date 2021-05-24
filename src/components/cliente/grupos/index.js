import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import api from '../../../services/api'

export default function Grupos() {
  
  const [grupos: [], setGrupos] = React.useState({});

  useEffect(() => {

    const grupos = api.get('/grupos');

    var g = Promise.resolve(grupos);
    g.then(function(v) {
      setGrupos(v.data);
      console.log(v.data)
    });
  
  }, []);

  return (
    <AppBar position="fixed" color="primary">
      <Tabs
        value={0}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {/*
          grupos.map(grupos => (
            <a href="#6" style={{ textDecoration: 'none', color: 'white', }}>
              <Tab label={ grupos.descricao }/>
            </a>
          ))
          */}
        
      </Tabs>
    </AppBar>
  );
}

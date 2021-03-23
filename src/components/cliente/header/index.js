import React, { useContext } from 'react';

import styles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import FastfoodIcon from '@material-ui/icons/FastfoodRounded';
import Grupos from '../grupos';
import Link from '@material-ui/core/Link';

import { ProviderCarrinho } from '../contextCarrinho';

export default function Header() {

  const teste = useContext(ProviderCarrinho);
  console.log(teste)

  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose }>
          <Typography color="primary" component="p">
            Entrar
          </Typography>
      </MenuItem>
      <MenuItem onClick={ handleMenuClose }>
          <Typography color="primary" component="p">
            Minha Conta
          </Typography>
      </MenuItem>
      <MenuItem onClick={ handleMenuClose }>
        <Typography color="primary" component="p">
          Sair
        </Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={ mobileMenuId }
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <IconButton aria-label="Instagram" color="inherit">
            <ShoppingCartIcon color="primary" />
          </IconButton>
          <Typography color="primary" component="p">
            Carrinho
          </Typography>
        </MenuItem>
      </Link>
      <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <IconButton aria-label="WhatsApp" color="inherit">
            <FastfoodIcon color="primary" />
          </IconButton>
          <Typography color="primary" component="p">
            Meus Pedidos
          </Typography>        
        </MenuItem>
      </Link>
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <Typography color="primary" component="p">
          Perfil
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            <Link href={'/'} color="inherit" style={{ textDecoration: 'none' }}>
              Scriptsky System
            </Link>
          </Typography>
          <div className={ classes.grow } />
          <Grupos />
          <IconButton
            aria-label="show more"
            aria-controls={ mobileMenuId }
            aria-haspopup="true"
            onClick={ handleMobileMenuOpen }
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      { renderMobileMenu }
      { renderMenu }
    </div>
  );
}

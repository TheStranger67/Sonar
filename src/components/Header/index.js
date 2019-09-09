import React from 'react';
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import {
  HeaderBar,
  MenuItem,
  LoginButton,
  LogoutButton
} from './styles';

function Header ({ history }) {
  const handleLogged = () => {
    if (localStorage.userToken === undefined) {
      return (
        <LoginButton to='/login' className='btn_login'> 
          Entrar
        </LoginButton> 
      ) 
    }
    return ( 
      <>  
        <MenuItem to='/profile'>
          Meu perfil
        </MenuItem>
        <LogoutButton onClick={() => handleLogOut ()}>
          Sair
        </LogoutButton>
      </>
    )
  }

  const handleLogOut = () => {
    localStorage.removeItem ('userToken');
    localStorage.removeItem ('userId');
    localStorage.removeItem ('userName');
    history.push ('/');
  }

  return (
    <HeaderBar fixed='top'>
      <MenuItem exact='true' to='/' className='brand'>
        <h1> Sonar </h1>
      </MenuItem>
      <Nav className='ml-auto'>
        {handleLogged ()}
      </Nav>
    </HeaderBar>
  );
}

export default withRouter (Header);

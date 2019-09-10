import React from 'react';
import { isAuthenticated, logout } from '../../services/auth'
import { Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import {
  HeaderBar,
  MenuItem,
  LoginButton,
  LogoutButton
} from './styles';

function Header ({ history }) {
  const handleLogOut = () => {
    logout ();
    history.push ('/');
  }

  return (
    <HeaderBar fixed='top'>
      <MenuItem exact='true' to='/' className='brand'>
        <h1> Sonar </h1>
      </MenuItem>
      <Nav className='ml-auto'>
        {isAuthenticated () ? (
          <>  
            <MenuItem to='/profile'>
              Meu perfil
            </MenuItem>
            <LogoutButton onClick={() => handleLogOut ()}>
              Sair
            </LogoutButton>
          </>
        ) : ( 
          <LoginButton to='/login' className='btn_login'> 
            Entrar
          </LoginButton>
        )}
      </Nav>
    </HeaderBar>
  );
}

export default withRouter (Header);

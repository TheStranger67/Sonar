import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../icons/logo.png';
import { 
  isAuthenticated,
  getUserName,
  getUserLevel,
  logout,
} from '../../services/auth'

import {
  HeaderBar,
  Menu,
  Brand,
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
    <HeaderBar>
      <Brand exact='true' to='/'>
        <img src={logo} alt='Projeto Sonar'/>
        <h1> Sonar </h1>
      </Brand>
      <Menu>
        {isAuthenticated () ? (
          <>
            <p> {`Bem-vindo (a), ${getUserName ()}!`} </p>
            {getUserLevel () === 'user' && (
              <>
                <MenuItem to='/profile/user'>
                  Meu perfil
                </MenuItem>
                <LogoutButton onClick={() => handleLogOut ()}>
                  Sair
                </LogoutButton>
              </>
            )}
            {getUserLevel () === 'company' && (
              <>
                <MenuItem to='/profile/company'>
                  Meu perfil
                </MenuItem>
                <LogoutButton onClick={() => handleLogOut ()}>
                  Sair
                </LogoutButton>
              </>
            )}
            {getUserLevel () === 'admin' && (
              <>
                <p> ADM </p>
                <LogoutButton onClick={() => handleLogOut ()}>
                  Sair
                </LogoutButton>
              </>
            )}
          </>
        ) : ( 
          <LoginButton to='/login'> 
            Entrar
          </LoginButton>
        )}
      </Menu>
    </HeaderBar>
  );
}

export default withRouter (Header);

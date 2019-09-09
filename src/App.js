import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostUpload from './pages/PostUpload';
import Profile from './pages/Profile';
import './App.css';

export default function App () {
  return (
    <Router>
      <Header history />
      <Container fluid className='app'>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route path='/upload' component={PostUpload}></Route>
      </Container>
    </Router>
  );
}

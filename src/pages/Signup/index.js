import React from 'react';
import { Tab } from 'react-bootstrap';
import SignupFis from '../../components/SignupForm/SignupFis';
import SignupJur from '../../components/SignupForm/SignupJur';
import { Container, FormContainer, FormTabs } from './styles';

export default function Signup () {
  return (
    <div className='form_background'>
      <Container>
        <FormContainer>
          <FormTabs transition={false} defaultActiveKey='fis_tab'>
            <Tab eventKey='fis_tab' title='Pessoal'>
              <SignupFis/>
            </Tab>
            <Tab eventKey='jur_tab' title='Empresa'>
              <SignupJur/>
            </Tab>
          </FormTabs>
        </FormContainer>
      </Container>
    </div>
  );
}

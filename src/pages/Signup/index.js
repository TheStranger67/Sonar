import React from 'react';
import { Tab } from 'react-bootstrap';
import Personal from '../../components/SignupForm/Personal';
import Company from '../../components/SignupForm/Company';
import { Container, FormContainer, FormTabs } from './styles';

export default function Signup () {
  return (
    <div className='form_background'>
      <Container>
        <FormContainer>
          <FormTabs transition={false} defaultActiveKey='fis_tab'>
            <Tab eventKey='fis_tab' title='Pessoal'>
              <Personal/>
            </Tab>
            <Tab eventKey='jur_tab' title='Empresa'>
              <Company/>
            </Tab>
          </FormTabs>
        </FormContainer>
      </Container>
    </div>
  );
}

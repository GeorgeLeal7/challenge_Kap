import React from 'react';

import { 
  Container,
  TitlePage,
} from '../components/styled';

import TextField from '../components/textField';

function Home() {
  return(
    <Container>
      <TitlePage><h1>HOME</h1></TitlePage>
      <TextField />
    </Container>
  );
};

export default Home;
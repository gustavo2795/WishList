import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

import { Container, Body } from './styles';

const Favorites = () => {
  return (
    <Container>
      <Header />
      <Body>
       <h3>Lista de desejos</h3>
      </Body>
    </Container>
  );
}

export default Favorites;

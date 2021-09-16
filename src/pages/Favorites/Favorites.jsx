import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Card from '../../components/Card';

import { Container, Body, Breadcrumb } from './styles';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    console.log(data);
    setFavorites(data);
  }, [])

  return (
    <Container>
      <Header />
      <Breadcrumb>
        <h4 onClick={() => history.push('/')}>Home {'> '}</h4>
        <h4>Lista de desejos</h4>
      
      </Breadcrumb>
      <Body>
        <Grid container spacing={2} style={{alignSelf: 'center'}}>
          {isEmpty(favorites) ? (
            <h3>Nenhum item na lista de desejo</h3>
          ) : ( 
            favorites.map((value, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} xl={3} lg={3}>
                <Card product={value} />
              </Grid>
            )
          ))}
        </Grid>
      </Body>
    </Container>
  );
}

export default Favorites;

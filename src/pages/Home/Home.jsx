import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../../components/Card';

import { getProducts } from '../../services/products';

import { Container, Body } from './styles';

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        <Grid container spacing={2} style={{alignSelf: 'center'}}>
          {products.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} xl={3} lg={3}>
              <Card product={value} />
            </Grid>
          ))}
        </Grid>
      </Body>
    </Container>
  );
}

export default Home;

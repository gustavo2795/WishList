import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import Card from '../../components/Card';
import { getProducts } from '../../services/products';

import { Container, Body, Breadcrumb } from './styles';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    localStorage.setItem('products', JSON.stringify(data));
  };

  const setFavoriteProduct = (productId, status) => {
    let transformed = [...products];
    transformed[productId] = {
      ...transformed[productId],
      favorite: status,
    };
    setProducts(transformed);
    localStorage.setItem('products', JSON.stringify(transformed));
  };

  const filterByFavorite = () => {
    const filtered = products.filter(function (element) {
      return element.favorite === true;
    });
    localStorage.setItem('favorites', JSON.stringify(filtered));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites'));
    if (isEmpty(data)) {
      fetchProducts();
    } else {
      const _products = JSON.parse(localStorage.getItem('products'));
      setProducts(_products);
    }
  }, []);

  useEffect(() => {
    filterByFavorite();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  return (
    <Container>
      <Header />
      <Breadcrumb>
        <h4>Home</h4>
      </Breadcrumb>
      <Body>
        <Grid container spacing={2} style={{alignSelf: 'center'}}>
          {products.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} xl={3} lg={3}>
              <Card product={value} setFavoriteProduct={setFavoriteProduct}/>
            </Grid>
          ))}
        </Grid>
      </Body>
    </Container>
  );
}

export default Home;

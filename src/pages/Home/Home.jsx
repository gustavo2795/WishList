import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { getProducts } from '../../services/products';

import { Container } from './styles';

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
    </Container>
  );
}

export default Home;

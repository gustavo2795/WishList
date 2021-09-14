import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';

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
    <h1>Home</h1>
  );
}

export default Home;

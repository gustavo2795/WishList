import React, { useState } from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  Container,
  HeaderCard,
  FlagContainer,
  CardContent,
  ProductImage,
  ProductTitle,
  ProductValue
} from './styles';

const Card = ({ product }) => {
  const [favorite, setFavorite] = useState(false);
  console.log(product);
  return (
    <Container>
      <HeaderCard>
        <FlagContainer onClick={() => setFavorite(!favorite)}>
          <FavoriteIcon 
            style={{
              display: 'flex',
              color: favorite ? 'red' : 'white',
              marginTop: '10px',
              marginLeft: '3px'
              }}
          />
        </FlagContainer>
      </HeaderCard>
      <CardContent>
        <ProductImage src={product.image} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductValue>{product.currencyFormat} : {product.price}</ProductValue>
      </CardContent>
    </Container>
    
  );
}

export default Card;

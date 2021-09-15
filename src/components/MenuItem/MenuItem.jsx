import React from 'react';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  IconContainer,
  Container,
  Label
} from './styles';

const MenuItem = ({ label, icon }) => {

  const renderIcon = () => {
    switch (icon) {
      case 'phone':
        return <PhoneIcon />;
      case 'location':
        return <LocationOnIcon />;
      case 'heart':
        return <FavoriteIcon />;
      default:
        return <></>;
    };
  };

  return (
    <Container>
      <IconContainer>
        {renderIcon()}
      </IconContainer>
      <Label>{label}</Label>
    </Container>
  );
};

export default MenuItem;

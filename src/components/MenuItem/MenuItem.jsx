import React from 'react';
import { useHistory } from 'react-router-dom';

import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {
  IconContainer,
  Container,
  Label
} from './styles';

const MenuItem = ({ label, icon, path }) => {
  const history = useHistory();

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
      <Label>
        <h4 onClick={() => history.push(path)}>{label}</h4>
      </Label>
    </Container>
  );
};

export default MenuItem;

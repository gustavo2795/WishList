import React from 'react';

import MenuItem from '../MenuItem'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import {
  HeaderContainer,
  LinksContainer,
  LogoContainer,
  RightContent,
  SearchContainer,
  SearchInput,
  Icon 
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h2>MagaNets</h2>
      </LogoContainer>
      <RightContent>
        <LinksContainer>
          <MenuItem label='Cidade: Brasília' icon='location'/>
          <MenuItem label='Central de atendimento' icon='phone'/>
          <MenuItem label='Lista de desejos' icon='heart' path='/favorites'/>
        </LinksContainer>
        <SearchContainer>
          <Icon>
            <SearchOutlinedIcon style={{color: '#5D5E5D'}}/>
          </Icon>
          <SearchInput
            placeholder="Busca"
            id="search-input"
          />
        </SearchContainer>
      </RightContent>
    </HeaderContainer>
    
  );
}

export default Header;

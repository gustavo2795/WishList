import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  background: #5A2D82;
  border-top: 10px solid #370E53;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: -45px;

  &:hover {
    cursor: pointer;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  height: 60px;
  align-items: center;
  align-self: center;
  color: #fff;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 5px;
  width: 70%;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
  background: #fff;
`;

export const SearchInput = styled.input`
  height: 36px;
  width: 100%;
  border: 0;
  background-color: transparent;
  border-style: none;
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
  flex: 0 0;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 300px;
  height: 40px;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;
  background: ${props => props.isFair ? '#4D8B8F' : '#BA4A49'};
  color: #070808;
`;

export const Button = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  background: #3378BC;
  color: #fff;
  border-radius: 15px;
  margin-top: 20px;
`;

export const HistoryContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  min-width: 60%;
  margin-Top: 40px;
`;
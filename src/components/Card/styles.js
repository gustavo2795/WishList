import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 400px;
  margin-bottom: 10px;
  padding-right: 30px;
  padding-left: 30px;
  box-shadow: 10px 5px 5px #D5D6D7;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FlagContainer = styled.div`
  width: 30px;
  height: 50px;
  background: #000;
  align-self: flex-start;
  margin-left: -25px;
  border-bottom: 10px solid #fff;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProductTitle = styled.h4`
  align-self: center;
  color: #5D5E5D;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ProductValue = styled.h4`
  align-self: center;
  color: #E1CB48;
  font-weight: bold;
`
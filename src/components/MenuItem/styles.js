import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  color: #fff;
`;

export const Label = styled.h4`
  &:hover {
    text-decoration: underline;
  }
`;
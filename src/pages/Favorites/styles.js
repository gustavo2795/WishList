import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #FFF;
`;

export const Body = styled.div`
  display: flex;
  width: 90%;
  padding: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Breadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  padding-left: 100px;
  padding-bottom: 20px;
  padding-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;
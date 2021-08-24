import styled from 'styled-components';

export const Card = styled.View`
  /* position: relative; */
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px;
  border-radius: 8px;
  background-color: #ddd;
  margin: 4px 8px;
`;

export const CardImage = styled.Image`
  width: 98px;
  height: 98px;
`;

export const CardTitle = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 20px;
`;

import styled from "styled-components/native";

export const TouchableCard = styled.TouchableOpacity`
  flex: 1;
  max-width: 50%;
  margin-bottom: 16px;
  padding: 0 4px 0 8px;
`;

export const Avatar = styled.Image`
  border-radius: 18px;
  width: 36px;
  height: 36px;
  margin: 8px 0;
`;

export const Title = styled.Text`
  padding: 8px;
  font-size: 16px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 14px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const LikesContainter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Likes = styled.Text`
  font-size: 16px;
  margin-left: 8px;
`;

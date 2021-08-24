import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 48px;
`;

export const PokemonImage = styled.Image`
  width: 145px;
  height: 145px;
`;

export const PokemonImageContainer = styled.View`
  margin: 24px auto 16px auto;

  border-radius: 100px;
  padding: 16px;
  border: 1px black;
`;

export const PokemonName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DetailsWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const DetailsText = styled.Text`
  text-transform: capitalize;
`;

export const BtnViewMoreInfos = styled.TouchableOpacity`
  padding: 12px;
  width: 90%;
  border-radius: 8px;
  background-color: #556;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  color: white;
  text-transform: capitalize;
`;

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
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
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DetailsWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DetailsText = styled.Text`
  text-transform: capitalize;
`;

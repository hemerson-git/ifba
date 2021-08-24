import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: flex-start;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const PokemonName = styled.Text`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Value = styled.Text`
  font-size: 18px;
  flex-wrap: wrap;
`;

export const PokemonsMeta = styled.View`
  flex: 4;
  width: 100%;
  padding: 16px;
`;

export const PokemonsMetaDetail = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

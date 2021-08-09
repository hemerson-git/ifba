import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

import {
  Container,
  DetailsText,
  DetailsWrapper,
  PokemonImage,
  PokemonImageContainer,
  PokemonName,
  Title,
} from "./styles";

function Pokemon() {
  const { params } = useRoute();
  const { name, abilities, height } = params.pokemon;

  const { ["official-artwork"]: pokemonImage } = pokemon.sprites.other;

  console.log(pokemon);

  return (
    <Container>
      <PokemonImageContainer>
        <PokemonImage source={{ uri: pokemonImage.front_default }} />
      </PokemonImageContainer>

      <PokemonName>{name}</PokemonName>

      <DetailsWrapper>
        <Title>Habilidades</Title>

        {abilities.map(({ ability }) => (
          <DetailsText key={ability.name}>{ability.name}</DetailsText>
        ))}
      </DetailsWrapper>

      <DetailsWrapper>
        <Title>Altura</Title>

        <DetailsText>{height}</DetailsText>
      </DetailsWrapper>
    </Container>
  );
}

export default Pokemon;

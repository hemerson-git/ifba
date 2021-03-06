import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";

import {
  BtnText,
  BtnViewMoreInfos,
  Container,
  DetailsText,
  DetailsWrapper,
  PokemonImage,
  PokemonImageContainer,
  PokemonName,
  Title,
} from "./styles";

function Pokemon() {
  const navigation = useNavigation();

  const { params } = useRoute();
  const { name, abilities, height, sprites, base_experience } = params.pokemon;

  const { ["official-artwork"]: pokemonImage } = sprites.other;

  function getMoreInfos() {
    navigation.navigate("Mais Informações", {
      pokemon: params.pokemon,
    });
  }

  return (
    <Container>
      <View>
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

        <DetailsWrapper>
          <Title>Experiência Base</Title>

          <DetailsText>{base_experience} (XP)</DetailsText>
        </DetailsWrapper>
      </View>

      <BtnViewMoreInfos activeOpacity={0.9} onPress={getMoreInfos}>
        <BtnText>{`+ informações sobre ${name}`}</BtnText>
      </BtnViewMoreInfos>
    </Container>
  );
}

export default Pokemon;

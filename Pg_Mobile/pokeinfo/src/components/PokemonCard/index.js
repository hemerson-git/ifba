import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card, CardImage, CardTitle } from "./styles";

function PokemonCard({ pokemon }) {
  const navigation = useNavigation();

  function handleSelectedPokemon() {
    navigation.navigate("Pokemon", {
      pokemon,
    });
  }

  return (
    <TouchableOpacity onPress={handleSelectedPokemon} activeOpacity={0.9}>
      <Card>
        <CardTitle>{pokemon.name}</CardTitle>

        <CardImage
          source={{
            uri: pokemon.sprites.front_default,
          }}
        />
      </Card>
    </TouchableOpacity>
  );
}

export default PokemonCard;

import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card, CardImage, CardTitle } from "./styles";

import { getImages } from "../../service/api";

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
            uri: getImages(pokemon.name, "front_default"),
          }}
        />
      </Card>
    </TouchableOpacity>
  );
}

export default PokemonCard;

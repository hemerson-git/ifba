import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getImages } from "../../service/api";

import {
  PokemonImage,
  Container,
  PokemonName,
  Title,
  PokemonsMeta,
  Value,
  PokemonsMetaDetail,
} from "./styles";

function MoreInfos() {
  const route = useRoute();
  const { name, sprites, height, moves, stats, base_experience, weight } =
    route.params.pokemon;

  const [items, setItems] = useState([]);

  useEffect(() => {
    loadImages();
  }, [items]);

  function loadImages() {
    const parsedItems = [
      getImages(pokemon, "front_default"),
      getImages(pokemon, "front_shiny"),
      getImages(pokemon, "back_default"),
      getImages(pokemon, "back_shiny"),
    ];

    const images = parsedItems.map((item, index) => {
      return {
        id: index,
        url: item,
      };
    });

    if (!items.length) {
      setItems(images);
    }
  }

  if (!items.length) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <PokemonName>{name}</PokemonName>

      <FlatList
        data={items}
        renderItem={({ item }) => <PokemonImage source={{ uri: item.url }} />}
        keyExtractor={(item) => String(item?.id)}
        horizontal
        fadingEdgeLength={100}
        style={{ flex: 1, borderBottomWidth: 1, borderColor: "#000" }}
      />

      <PokemonsMeta>
        <ScrollView>
          <PokemonsMetaDetail>
            <Title>Experiência Base: </Title>
            <Value>{base_experience} (XP)</Value>
          </PokemonsMetaDetail>

          <PokemonsMetaDetail>
            <Title>Height: </Title>
            <Value>{height}</Value>
          </PokemonsMetaDetail>

          <PokemonsMetaDetail>
            <Title>Weight: </Title>
            <Value>{weight}</Value>
          </PokemonsMetaDetail>

          {/* {stats.map(({ stat, base_stat }, index) => (
            <PokemonsMetaDetail key={index}>
              <Title>{stat.name}: </Title>
              <Value>{base_stat}</Value>
            </PokemonsMetaDetail>
          ))}

          <PokemonsMetaDetail>
            <Title>Moves: </Title>
            {moves.map(({ move }, index) => (
              <Value key={index}>{move.name}, </Value>
            ))}
          </PokemonsMetaDetail> */}
        </ScrollView>
      </PokemonsMeta>
    </Container>
  );
}

export default MoreInfos;

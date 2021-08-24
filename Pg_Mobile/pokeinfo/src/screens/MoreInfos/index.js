import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { useRoute } from "@react-navigation/native";

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
    getImages();
  }, [items]);

  function getImages() {
    const values = Object.values(sprites);
    const parsedUrls = values.filter((image) => typeof image === "string");

    const images = parsedUrls.map((item, index) => {
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

          {stats.map(({ stat, base_stat }, index) => (
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
          </PokemonsMetaDetail>
        </ScrollView>
      </PokemonsMeta>
    </Container>
  );
}

export default MoreInfos;

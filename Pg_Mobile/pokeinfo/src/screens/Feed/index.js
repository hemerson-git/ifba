import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";

import PokemonCard from "../../components/PokemonCard";
import { Container } from "./styles";

import { getFeeds, getImages } from "../../service/api";

function Feed() {
  const [feed, setFeed] = useState([]);
  const [showingItems, setShowingItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    loadData();
    if (pokemonsList) {
      const feedItems = pokemonsList;
      setFeed(feedItems);
      getFeed();
    }
  }, [feed]);

  async function loadData() {
    console.log(getImages("ivysaur", "front_default"));
    const data = getFeed();
    setPokemonsList(data);
  }

  function getFeed() {
    getFeeds(page)
      .then((moreItems) => {
        if (feed) {
          if (filteredItems.length) {
            setIsLoading(true);

            showingItems
              ? setShowingItems([...showingItems, ...moreItems])
              : setShowingItems(moreItems);

            setPage(page);
          }
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong! Please try again later!!!");
        console.log(error);
      });
  }

  if (isLoading) {
    <Container>
      <ActivityIndicator />
    </Container>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={showingItems}
        keyExtractor={(item) => String(item._id)}
        onEndReached={getFeed}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        style={{ backgroundColor: "#000" }}
      />
    </SafeAreaView>
  );
}

export default Feed;

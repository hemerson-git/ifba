import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from "react-native";

import PokemonCard from '../../components/PokemonCard';
import pokemonStaticList from '../../server/pokemons.json';

import { Container } from './styles';

function Feed() {
  const [feed, setFeed] = useState([]);
  const [showingItems, setShowingItems] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    if (pokemonStaticList) {
      const { pokemons: FeedItems } = pokemonStaticList;
      setFeed(FeedItems);
      getFeed();
    }
  }, [feed])
  
  function getFeed() {
    const initialId = ITEMS_PER_PAGE * page + 1;
    const lastId = ITEMS_PER_PAGE + initialId - 1;

    const filteredItems = feed.filter(item => item.id >= initialId && item.id <= lastId);

    if(filteredItems.length) {
      setIsLoading(true);

      showingItems
        ? setShowingItems([...showingItems, ...filteredItems])
        : setShowingItems(filteredItems);

      setPage(page + 1);
    }

    // Dummy Server
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  
  if(isLoading) {
    <Container>
      <ActivityIndicator />
    </Container>
  }
  
  return (
    <SafeAreaView>
      <FlatList 
        data={showingItems}
        keyExtractor={item => String(item.id)}
        onEndReached={getFeed}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => (
          <PokemonCard pokemon={item}/>
        )}
        style={{ backgroundColor: '#000'}}
      />
    </SafeAreaView>
  );
};

export default Feed;

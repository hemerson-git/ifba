import React from "react";
import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

import { Container } from "./styles";

import staticFeeds from "../../server/feeds.json";
import FeedCard from "../../components/FeedItems";

function Feed() {
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(0);
  const [showingItems, setShowingItems] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const FEEDS_PER_PAGE = 4;

  useEffect(() => {
    if (staticFeeds) {
      const { feeds: feedItems } = staticFeeds;
      setFeeds(feedItems);
      loadFeed();
    }
  }, [feeds]);

  function loadFeed() {
    const initialID = page * FEEDS_PER_PAGE + 1;
    const finalId = initialID + FEEDS_PER_PAGE - 1;

    const filteredItems = feeds.filter((feed) => {
      return feed._id >= initialID && feed._id <= finalId;
    });

    if (filteredItems.length) {
      setIsLoading(true);

      showingItems
        ? setShowingItems([...showingItems, ...filteredItems])
        : setShowingItems(filteredItems);
      setPage(page + 1);
    }

    // Dummy Server Delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator size="large"/>
      </Container>
    );
  }

  return (
    <Container center>
      <FlatList
        data={showingItems}
        numColumns={2}
        keyExtractor={(item) => String(item._id)}
        onEndReached={loadFeed}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <FeedCard
            title={item.company.name}
            product={item.product}
            likes={item.likes}
          />
        )}
        style={{ width: "100%" }}
      ></FlatList>
    </Container>
  );
}

export default Feed;

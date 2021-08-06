import * as React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Card, Paragraph } from "react-native-paper";

import {
  TouchableCard,
  Title,
  Avatar,
  ProductName,
  Price,
  Likes,
  LikesContainter,
} from "./styles";

import avatar from "../../assets/img/avatar.jpeg";

function FeedCard({ title, product, likes }) {
  const { description, name, price } = product;

  return (
    <TouchableCard activeOpacity={0.8}>
      <Card>
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          resizeMode="cover"
          style={{ height: 150 }}
        />

        <Card.Content>
          <Avatar source={avatar} />

          <Title>{title}</Title>

          <ProductName>{name}</ProductName>

          <Paragraph>{description}</Paragraph>

          <Price>R$ {price}</Price>

          <LikesContainter>
            <FontAwesome5 name="heart" />
            <Likes>{likes}</Likes>
          </LikesContainter>
        </Card.Content>
      </Card>
    </TouchableCard>
  );
}

export default FeedCard;

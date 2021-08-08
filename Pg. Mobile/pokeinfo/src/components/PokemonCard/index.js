import React from 'react';
import { useEffect } from 'react';
import {SvgUri} from 'react-native-svg';
import { Card, CardImage, CardTitle } from './styles';

function PokemonCard({ pokemon }) {
  useEffect(() => {
    console.log(pokemon.sprites.other.dream_world.front_default)
  }, [])
  
  return (
    <Card>
      <CardTitle>{pokemon.name}</CardTitle>

      <CardImage
        source={{
          uri: pokemon.sprites.front_default
        }}
      />
    </Card>
  );
}

export default PokemonCard;

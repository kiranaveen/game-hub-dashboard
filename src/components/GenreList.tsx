import React from "react";
import useGenres, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={'5px'} key={genre.id}>
            <HStack>
                <Image boxSize='32px' borderRadius={8} src={genre.image_background}/>
                <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
            </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

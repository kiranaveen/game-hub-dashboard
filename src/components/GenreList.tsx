import React from "react";
import useGenres, { Genre } from "../hooks/useGenre";
import useData from "../hooks/useData";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data ,isLoading ,error } = useGenres();

  if(error) return null;
  
  if(isLoading) return <Spinner/>;

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

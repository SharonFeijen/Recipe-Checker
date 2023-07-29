import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Ingredients = ({ recipe }) => {
  // To select ingredients
  const ingredients = recipe.ingredientLines;

  // To return each ingredient seperately
  return ingredients.map((ingredient) => {
    return (
      <Text
        as="i"
        color="yellow.900"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        <Text>{ingredient}</Text>
      </Text>
    );
  });
};

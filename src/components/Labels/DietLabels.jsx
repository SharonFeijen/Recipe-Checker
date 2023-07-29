import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const DietLabels = ({ recipe }) => {
  // To select the diet labels
  const dietLabels = recipe.dietLabels;

  // To return each label seperately
  return dietLabels.map((dietLabel) => {
    return (
      <Text
        color="green.700"
        fontWeight="semibold"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {dietLabel}
      </Text>
    );
  });
};

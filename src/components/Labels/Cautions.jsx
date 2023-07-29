import { Text } from "@chakra-ui/react";
import uuid from "react-uuid";

export const Cautions = ({ recipe }) => {
  // To select the cautions labels
  const Cautions = recipe.cautions;
  // To return each label seperately
  return Cautions.map((caution) => {
    return (
      <Text
        color="red.600"
        fontWeight="semibold"
        key={uuid()}
        fontSize={{
          base: "0.7rem",
          sm: "0.8rem",
          md: "0.9rem",
          lg: "1rem",
        }}
      >
        {caution}
      </Text>
    );
  });
};

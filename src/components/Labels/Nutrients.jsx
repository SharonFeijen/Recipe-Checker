import { Flex, Text } from "@chakra-ui/react";

export const Nutrients = ({ recipe }) => {
  // To select the nutrients
  const nutrients = recipe.totalNutrients;

  // Array to select all nutrients by label
  const nutrientsArray = Object.keys(nutrients).map((key) => {
    return nutrients[key];
  });

  const energy = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Energy";
  });

  const carbs = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Carbs";
  });

  const protein = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Protein";
  });

  const fat = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Fat";
  });

  const cholesterol = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Cholesterol";
  });

  const sodium = nutrientsArray.filter((nutrient) => {
    return nutrient.label === "Sodium";
  });

  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      gap={1}
      align="center"
      m="0 auto"
      fontSize={{
        base: "0.7rem",
        sm: "0.8rem",
        md: "0.9rem",
        lg: "1rem",
      }}
    >
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{energy[0].label}:</Text>
        <Text as="i"> {Math.round(energy[0].quantity)} kcal</Text>
      </Flex>
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{carbs[0].label}: </Text>
        <Text as="i"> {Math.round(carbs[0].quantity)} grams</Text>
      </Flex>
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{protein[0].label}: </Text>
        <Text as="i"> {Math.round(protein[0].quantity)} grams</Text>
      </Flex>
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{fat[0].label}: </Text>
        <Text as="i"> {Math.round(fat[0].quantity)} grams</Text>
      </Flex>
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{cholesterol[0].label}: </Text>
        <Text as="i"> {Math.round(cholesterol[0].quantity)} grams</Text>
      </Flex>
      <Flex direction="column" gap={1} m="1rem">
        <Text as="b">{sodium[0].label}: </Text>
        <Text as="i"> {Math.round(sodium[0].quantity)} grams</Text>
      </Flex>
    </Flex>
  );
};

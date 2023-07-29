import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { SearchInput } from "./ui/SearchInput";
import { RecipeItems } from "./RecipeItems";
import { RadioButton } from "./ui/RadioButton";
import { data } from "../utils/data";

const recipes = data.hits;

export const SearchRecipe = ({ onClick }) => {
  // To search through recipes
  const [searchField, setSearchField] = useState("");
  // To filter recipes
  const [filterRecipes, setFilterRecipes] = useState("all");

  const handleFilter = (e) => {
    setFilterRecipes(e.target.value);
  };

  const recipeFilter = recipes.filter((recipe) => {
    // All recipes filter
    if (filterRecipes === "all") return recipe;
    // Vegetarian recipes
    if (filterRecipes === "vegetarian") {
      return recipe.recipe.healthLabels.includes("Vegetarian");
    }
    // Vegan recipes filter
    if (filterRecipes === "vegan") {
      return recipe.recipe.healthLabels.includes("Vegan");
    }
    // Pescatarian recipes filter
    if (filterRecipes === "pescatarian") {
      return recipe.recipe.healthLabels.includes("Pescatarian");
    }
  });

  // To filter the recipes from search input
  const matchRecipes = recipeFilter.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <Flex direction="column" alignItems="center" justify="center" w="100%">
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        gap={3}
        w="85%"
        mt="2rem"
        boxSizing="borderbox"
      >
        <RadioButton value={recipeFilter} onChange={handleFilter} />
        <SearchInput onChange={(e) => setSearchField(e.target.value)} />
      </Flex>
      <RecipeItems onClick={onClick} recipes={matchRecipes} />
    </Flex>
  );
};

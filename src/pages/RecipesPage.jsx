import { Center, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../components/RecipeChoice";
import { SearchRecipe } from "../components/SearchRecipe";

export const RecipesPage = () => {
  const greeting = "Winc Recipe Checker";

  const [userRecipe, setUserRecipe] = useState("");

  // To toggle between recipe page and recipe choice
  return (
    <Center
      w="100%"
      h="100%"
      flexDir="column"
      bgImage="url('./assets/recipe-images/background_table-_with_food.jpeg')"
      bgPosition="top"
      bgRepeat="repeat"
      bgSize={{ base: "contain", md: "cover", lg: "cover", xl: "cover" }}
    >
      {userRecipe ? (
        // Recipe choice
        <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
      ) : (
        //Recipe page
        <>
          <Heading
            width="100%"
            h="150px"
            mb="10px"
            bgPosition="top"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            fontSize={{ base: "3rem", sm: "4rem", md: "5rem", lg: "7rem" }}
            color="#919215"
            textShadow="3px 6px black"
          >
            {greeting}
          </Heading>

          <SearchRecipe onClick={setUserRecipe} />
        </>
      )}
    </Center>
  );
};

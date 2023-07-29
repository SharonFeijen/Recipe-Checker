import {
  Heading,
  Image,
  Box,
  Flex,
  IconButton,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { DietLabels } from "./Labels/DietLabels";
import { Cautions } from "./Labels/Cautions";
import { Ingredients } from "./Labels/Ingredients";
import { Nutrients } from "./Labels/Nutrients";
import { HealthLabels } from "./Labels/HealthLabels";

// Card item for  recipe choice
export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Card
      mt={{ base: "50px", lg: "300px", xl: "300px" }}
      direction="column"
      w={{ base: "90%", lg: "70%", xl: "70%" }}
      h="100%"
      p="10"
      boxShadow="dark-lg"
      borderRadius="25px"
      bgGradient="linear(to-b, yellow.100, orange.600)"
      color="orange.900"
      opacity="0.9"
      textAlign="center"
    >
      <CardHeader>
        {/* Double arrow to return back to recipepage */}
        <Box position="relative">
          <IconButton
            variant={"ghost"}
            textAlign="left"
            color="black"
            icon={<ArrowLeftIcon />}
            _hover={{ bg: "green.500", color: "white" }}
            _active={{ bg: "yellow.300" }}
            onClick={() => onClick()}
          />
        </Box>
        {/* Card items */}
        <Heading size="lg" mb="3rem">
          {recipe.label}!
        </Heading>
        <Flex gap={5} flexWrap="wrap">
          <Box h="200px" w="400px">
            <Image
              h="100%"
              w="100%"
              pb="10px"
              borderRadius="5px"
              src={recipe.image}
              alt="recipe"
            />
          </Box>
          <Flex direction="column" gap={3}>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="orange.900">
                Mealtype:
              </Text>
              <Text as="i" fontWeight="semibold" color="yellow.900">
                {recipe.mealType}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="orange.900">
                Dish:
              </Text>
              <Text as="i" fontWeight="semibold" color="yellow.900">
                {recipe.dishType}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="orange.900">
                Total cooking time:
              </Text>
              <Text as="i" fontWeight="semibold" color="yellow.900">
                {recipe.totalTime} minutes
              </Text>
            </Flex>
            <Flex gap={3}>
              <Text as="b" fontSize="sm" color="orange.900">
                persons:
              </Text>
              <Text as="i" fontWeight="semibold" color="yellow.900">
                {recipe.yield} person
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody
        direction="column"
        flexWrap="wrap"
        gap={2}
        align="flexStart"
        ml="3rem"
      >
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          gap={5}
          m="10px auto"
        >
          {/* To filter recipe */}
          {recipe.dietLabels.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b">Diet labels:</Text>
              <Text as="i">
                <DietLabels recipe={recipe} />
              </Text>
            </Flex>
          ) : null}

          {recipe.cautions.length > 0 ? (
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
              }}
              flexWrap="wrap"
              gap={2}
            >
              <Text as="b">Cautions:</Text>
              <Text as="i">
                <Cautions recipe={recipe} />
              </Text>
            </Flex>
          ) : null}
        </Flex>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align="flex-start"
          justify="flex-start"
          textAlign="left"
          gap={5}
          m="10px auto"
        >
          <Box w={{ md: "50%", lg: "50%" }}>
            <Text as="b" color="orange.900">
              Health labels:
            </Text>

            <Flex
              direction="row"
              flexWrap="wrap"
              gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
            >
              <HealthLabels recipe={recipe} />
            </Flex>
          </Box>

          <Box>
            <Text as="b" color="orange.900">
              Ingredients:
            </Text>

            <Flex
              direction="column"
              flexWrap="wrap"
              gap={1}
              align="flex-start"
              justify="flex-start"
            >
              <Ingredients recipe={recipe} />
            </Flex>
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex>
          <Nutrients recipe={recipe} />
        </Flex>
      </CardFooter>
    </Card>
  );
};

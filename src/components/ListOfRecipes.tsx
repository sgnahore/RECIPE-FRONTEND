import {
    Heading,
    ListItem,
    UnorderedList,
    Text,
    Button,
    Box,
    Flex,
} from "@chakra-ui/react";
import { ListOfRecipesProps, recipeTypeConverted } from "./Interfaces";
import { useState } from "react";

export function ListOfRecipes({ allRecipes }: ListOfRecipesProps): JSX.Element {
    const [singleRecipe, setSingleRecipe] =
        useState<recipeTypeConverted | null>();

    const handleViewRecipe = (recipe: recipeTypeConverted) =>
        setSingleRecipe(recipe);

    return (
        <>
            <Heading mb={4} fontSize="2xl">
                Choose Your Favorite Recipe
            </Heading>
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={6}
            >
                <UnorderedList listStyleType="none" pl={0}>
                    {allRecipes.map((recipe) => (
                        <ListItem
                            key={recipe.recipeID}
                            p={8}
                            m={4}
                            borderRadius="lg"
                            boxShadow="md"
                            bg="white"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="500px"
                        >
                            <Text fontWeight="bold">{recipe.name}</Text>
                            <Text fontSize="sm">
                                {recipe.cookingTimeMinutes} minutes
                            </Text>
                            {recipe.popular && (
                                <Text fontSize="xl">🔥🔥🔥</Text>
                            )}
                            <Button
                                colorScheme="teal"
                                size="sm"
                                onClick={() => handleViewRecipe(recipe)}
                            >
                                View More
                            </Button>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Flex>
            <Box
                bg={singleRecipe ? "green" : "white"}
                w="100%"
                p={4}
                color="white"
            >
                <Text>
                    {singleRecipe && (
                        <>
                            {singleRecipe.name} {singleRecipe.cuisine} Cooking
                            Time: {singleRecipe.cookingTimeMinutes}
                            Allergen Free?:{" "}
                            {singleRecipe.allergenFree === true ? "Yes" : "No"}
                            {singleRecipe.spiceLevel === "Mild"
                                ? "🌶️"
                                : singleRecipe.spiceLevel === "Medium"
                                ? "🌶️🌶️"
                                : singleRecipe.spiceLevel === "Hot"
                                ? "🌶️🌶️🌶️"
                                : null}
                        </>
                    )}
                </Text>
            </Box>
        </>
    );
}

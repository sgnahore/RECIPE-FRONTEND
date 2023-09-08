import {
    ListItem,
    UnorderedList,
    Text,
    Button,
    Box,
    Flex,
    Badge,
} from "@chakra-ui/react";
import { ListOfRecipesProps, recipeTypeConverted } from "./Interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ListOfRecipes({ allRecipes }: ListOfRecipesProps): JSX.Element {
    const [singleRecipe, setSingleRecipe] =
        useState<recipeTypeConverted | null>();

    const handleViewRecipe = (recipe: recipeTypeConverted) =>
        setSingleRecipe(recipe);

    const handleCloseRecipe = () => setSingleRecipe(null);
    return (
        <>
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={6}
            >
                <Link to="/create">
                    <Button colorScheme="teal" size="lg">
                        Create a Recipe
                    </Button>
                </Link>
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
            ;
            <Box
                bg={singleRecipe ? "green" : "white"}
                w="100%"
                p={4}
                color={singleRecipe ? "white" : "black"}
                rounded="md"
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
            >
                <Text>
                    {singleRecipe && (
                        <>
                            <Text fontSize="xl" fontWeight="bold">
                                {singleRecipe.name}
                            </Text>
                            <Text>{singleRecipe.cuisine}</Text>
                            <Text>
                                Cooking Time: {singleRecipe.cookingTimeMinutes}{" "}
                                minutes
                            </Text>
                            <Text>
                                Allergen Free?{" "}
                                <Badge
                                    colorScheme={
                                        singleRecipe.allergenFree
                                            ? "green"
                                            : "red"
                                    }
                                >
                                    {singleRecipe.allergenFree ? "Yes" : "No"}
                                </Badge>
                            </Text>
                            <Text>
                                Spice Level:{" "}
                                {singleRecipe.spiceLevel === "Mild"
                                    ? "🌶️"
                                    : singleRecipe.spiceLevel === "Medium"
                                    ? "🌶️🌶️"
                                    : singleRecipe.spiceLevel === "Hot"
                                    ? "🌶️🌶️🌶️"
                                    : null}
                            </Text>
                            <Button
                                colorScheme="teal"
                                size="sm"
                                mt={2}
                                onClick={() => handleCloseRecipe()}
                            >
                                Close
                            </Button>
                        </>
                    )}
                </Text>
            </Box>
            ;
        </>
    );
}

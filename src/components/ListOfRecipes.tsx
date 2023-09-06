import {
    Container,
    Heading,
    ListItem,
    UnorderedList,
    Text,
    Button,
    Box,
} from "@chakra-ui/react";
import { ListOfRecipesProps, recipeTypeConverted } from "./Interfaces";
import { useState } from "react";

export function ListOfRecipes({ allRecipes }: ListOfRecipesProps): JSX.Element {
    const [singleRecipe, setSingleRecipe] =
        useState<recipeTypeConverted | null>();

    const handleViewRecipe = (recipe: recipeTypeConverted) =>
        setSingleRecipe(recipe);

    return (
        <Container>
            <Heading>Choose Your Favourite Recipe</Heading>
            <UnorderedList>
                {allRecipes.map((recipe) => (
                    <ListItem key={recipe.recipeId}>
                        {recipe.name} {recipe.cookingTimeMinutes}minutes
                        {recipe.popular && <Text> 🔥 🔥 🔥 </Text>}
                        <Button onClick={() => handleViewRecipe(recipe)}>
                            {" "}
                            View More
                        </Button>
                    </ListItem>
                ))}
            </UnorderedList>
            <Box
                bg={singleRecipe ? "green" : "white"}
                w="100%"
                p={4}
                color="white"
            >
                <Text>
                    {singleRecipe && (
                        <>
                            {singleRecipe.name} {singleRecipe.cuisine}{" "}
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
        </Container>
    );
}

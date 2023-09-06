import {
    Container,
    Heading,
    ListItem,
    UnorderedList,
    Text,
    Button,
} from "@chakra-ui/react";
import { ListOfRecipesProps, recipeTypeConverted } from "./Interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ListOfRecipes({ allRecipes }: ListOfRecipesProps): JSX.Element {
    const [singleRecipe, setSingleRecipe] =
        useState<recipeTypeConverted | null>();

    const handleViewRecipe = (recipe: recipeTypeConverted) =>
        setSingleRecipe(recipe);

    return (
        <Container>
            <Link to="/create">Create a recipe</Link>
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
        </Container>
    );
}

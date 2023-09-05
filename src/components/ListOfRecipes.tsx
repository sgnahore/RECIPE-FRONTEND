import {
    Container,
    Heading,
    ListItem,
    UnorderedList,
    Text,
} from "@chakra-ui/react";
import { ListOfRecipesProps } from "./Interfaces";

export function ListOfRecipes({ allRecipes }: ListOfRecipesProps): JSX.Element {
    return (
        <Container>
            <Heading>Choose Your Favourite Recipe</Heading>

            <UnorderedList>
                {allRecipes.map((recipe) => (
                    <ListItem key={recipe.recipeId}>
                        {recipe.name} {recipe.cookingTimeMinutes}minutes
                        {recipe.popular && <Text> 🔥 🔥 🔥 </Text>}
                    </ListItem>
                ))}
            </UnorderedList>
        </Container>
    );
}

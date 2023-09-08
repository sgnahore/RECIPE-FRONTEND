import { useState } from "react";
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from "@chakra-ui/react";
import { CreateRecipeProps, CreatedRecipeType } from "../components/Interfaces";
import axios from "axios";
import { baseURL } from "./App";

export function CreateRecipe({
    getRecipes = () => undefined,
}: CreateRecipeProps): JSX.Element {
    const [name, setName] = useState<string>("");
    const [cuisine, setCuisine] = useState<string>("");
    const [cookingTimeMinutes, setCookingTimeMinutes] = useState(15);
    const [allergenFree, setAllergenFree] = useState(false);
    const [spiceLevel, setSpiceLevel] = useState<string>("");

    const handleCreateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleAddCookingTimeChange = () => {
        setCookingTimeMinutes(cookingTimeMinutes + 1);
    };

    const handleMinusCookingTimeChange = () => {
        setCookingTimeMinutes(cookingTimeMinutes - 1);
    };

    const handleSelectCuisine = (selectedCuisine: string) => {
        setCuisine(selectedCuisine);
    };

    const handleIsAllergenFree = () => {
        setAllergenFree(!allergenFree);
    };

    const handleSelectSpiceLevel = (selectedSpiceLevel: string) => {
        setSpiceLevel(selectedSpiceLevel);
    };

    const handleAddRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const addedRecipe: CreatedRecipeType = {
                name: name,
                cuisine: cuisine,
                cooking_time_minutes: cookingTimeMinutes,
                allergen_free: allergenFree,
                spice_level: spiceLevel,
            };

            const response = await axios.post(
                baseURL + "/recipes",
                addedRecipe
            );

            console.log("sending", addedRecipe);

            getRecipes();
            setName(" ");
            setCuisine(" ");
            setCookingTimeMinutes(15);
            console.log(
                "Recipe:",
                name,
                "has been added to the database",
                response.data
            );
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleAddRecipe}>
            <VStack spacing={4}>
                <FormControl>
                    <FormLabel>Recipe name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleCreateName}
                    />
                </FormControl>

                <Text>Cooking Time: {cookingTimeMinutes}</Text>

                <Button onClick={handleAddCookingTimeChange}>+</Button>
                <Button onClick={handleMinusCookingTimeChange}>-</Button>

                <Checkbox
                    isChecked={allergenFree}
                    onChange={handleIsAllergenFree}
                >
                    Allergen Free?
                </Checkbox>
            </VStack>

            <Menu>
                <MenuButton as={Button} colorScheme="blue">
                    {cuisine ? cuisine : "Choose Cuisine"}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleSelectCuisine("Italian")}>
                        Italian
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectCuisine("Chinese")}>
                        Chinese
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectCuisine("Caribbean")}>
                        Caribbean
                    </MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton as={Button} colorScheme="blue">
                    {spiceLevel ? spiceLevel : "Spice Level"}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleSelectSpiceLevel("Mild")}>
                        Mild
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectSpiceLevel("Medium")}>
                        Medium
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectSpiceLevel("Hot")}>
                        Hot
                    </MenuItem>
                </MenuList>
            </Menu>

            <Button type="submit" colorScheme="teal">
                Create Recipe
            </Button>
        </form>
    );
}

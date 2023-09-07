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
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
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

    const handleCreateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleCookingTimeChange = (valueAsString: string) => {
        setCookingTimeMinutes(+valueAsString);
    };

    const handleSelectCuisine = (selectedCuisine: string) => {
        setCuisine(selectedCuisine);
    };

    const handleIsAllergenFree = () => {
        setAllergenFree(!allergenFree);
    };

    const handleAddRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const addedRecipe: CreatedRecipeType = {
                name: name,
                cuisine: cuisine,
                cookingTimeMinutes: cookingTimeMinutes,
                allergenFree: allergenFree,
            };
            console.log("sending", cookingTimeMinutes);

            const response = await axios.post(
                baseURL + "/recipes",
                addedRecipe
            );

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
                <Checkbox
                    isChecked={allergenFree}
                    onChange={handleIsAllergenFree}
                >
                    Allergen Free?
                </Checkbox>
            </VStack>
            <NumberInput
                value={cookingTimeMinutes}
                min={10}
                max={20}
                onChange={handleCookingTimeChange} // Add this handler for cooking time
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Menu>
                <MenuButton as={Button} colorScheme="blue">
                    {cuisine ? cuisine : "Dropdown"}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleSelectCuisine("Italian")}>
                        Italian
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectCuisine("Chinese")}>
                        Chinese
                    </MenuItem>
                    <MenuItem onClick={() => handleSelectCuisine("Caribbean")}>
                        Caribbean{" "}
                    </MenuItem>
                </MenuList>
            </Menu>
            <Button type="submit">Create Recipe</Button>
        </form>
    );
}

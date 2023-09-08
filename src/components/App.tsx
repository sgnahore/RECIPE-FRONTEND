import { ListOfRecipes } from "./ListOfRecipes";
import "./App.css";
import { useState, useEffect } from "react";
import { recipeTypeConverted, recipeTypeDB } from "./Interfaces";
import axios from "axios";
import { NavBar } from "./NavBar";

export const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://recipe-app-59ck.onrender.com/recipes"
        : "http://localhost:4000";

function convertRecipeFormat(eachRecipe: recipeTypeDB) {
    const {
        recipe_id: recipeID,
        name,
        cuisine,
        allergen_free: allergenFree,
        spice_level: spiceLevel,
        cooking_time_minutes: cookingTimeMinutes,
        popular,
    } = eachRecipe;

    return {
        recipeID,
        name,
        cuisine,
        allergenFree,
        spiceLevel,
        cookingTimeMinutes,
        popular,
    };
}

function App() {
    const [recipes, setRecipes] = useState<recipeTypeConverted[]>([]);

    const getRecipes = async () => {
        try {
            const response = await axios.get(baseURL + "/recipes");
            const allRecipes = response.data.map((eachRecipe: recipeTypeDB) =>
                convertRecipeFormat(eachRecipe)
            );
            setRecipes(allRecipes);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);
    return (
        <div className="App">
            <NavBar />
            <ListOfRecipes allRecipes={recipes} />
        </div>
    );
}

export default App;

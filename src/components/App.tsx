import { ListOfRecipes } from "./ListOfRecipes";
import "./App.css";
import { useState } from "react";
import { recipeTypeDB } from "./Interfaces";
import axios from "axios";

function App() {
    const [recipes, setRecipes] = useState<recipeTypeDB[] | undefined>(
        undefined
    );

    const getRecipes = async () => {
        try {
            const response = await axios.get(
                "https://academy-recipe-app.netlify.app/recipes"
            );
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="App">
            <ListOfRecipes />
        </div>
    );
}

export default App;

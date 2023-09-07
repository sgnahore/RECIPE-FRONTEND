export interface recipeTypeDB {
    recipe_id: number;
    name: string;
    cuisine: string;
    allergen_free: boolean;
    spice_level: string;
    cooking_time_minutes: number;
    popular: boolean;
}

export interface recipeTypeConverted {
    recipeID: number;
    name: string;
    cuisine: string;
    allergenFree: boolean;
    spiceLevel: string;
    cookingTimeMinutes: number;
    popular: boolean;
}

export interface ListOfRecipesProps {
    allRecipes: recipeTypeConverted[];
}

export interface CreateRecipeProps {
    getRecipes?: () => void;
}

export interface CreatedRecipeType {
    name: string;
    cuisine: string;
    cooking_time_minutes: number;
    allergen_free: boolean;
    spice_level: string;
}

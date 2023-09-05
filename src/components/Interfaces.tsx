export interface recipeTypeDB {
    recipe_id: number;
    name: string;
    cuisine: string;
    allergen_free: boolean;
    spice_level: string;
    cooking_time_minutes: number;
    calorie_count: number;
    popular: boolean;
}

export interface recipeTypeConverted {
    recipeId: number;
    name: string;
    cuisine: string;
    allergenFree: boolean;
    spiceLevel: string;
    cookingTimeMinutes: number;
    calorieCount: number;
    popular: boolean;
}
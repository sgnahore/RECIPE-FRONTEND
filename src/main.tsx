import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { Welcome } from "./pages/WelcomePage";
import { CreateRecipe } from "./pages/CreateRecipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "recipes",
        element: <App />,
    },
    {
        path: "create",
        element: <CreateRecipe getRecipes={getRecipes} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
function getRecipes(): void {
    throw new Error("Function not implemented.");
}

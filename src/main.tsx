import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import { DisplaySingleRecipe } from "./components/DisplaySingleRecipe";
import { Welcome } from "./pages/WelcomePage";
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
        path: "recipes/:recipeId",
        element: <DisplaySingleRecipe />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ChakraProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </ChakraProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);

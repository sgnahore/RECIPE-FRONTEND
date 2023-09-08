import { Link } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";

export function Welcome(): JSX.Element {
    return (
        <Text>
            Welcome to the home of recipes{" "}
            <Button colorScheme="teal">
                <Link
                    to="/recipes"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    Click for recipes
                </Link>
            </Button>
        </Text>
    );
}

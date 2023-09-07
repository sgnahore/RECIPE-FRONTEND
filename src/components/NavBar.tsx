import { Text, Flex } from "@chakra-ui/react";

export function NavBar(): JSX.Element {
    return (
        <Flex
            as="nav"
            align="center"
            justify="center"
            p={4}
            bg="grey"
            color="white"
        >
            <Text fontSize="xl">Food Food Food</Text>
        </Flex>
    );
}

import Page404Component from "../components/Page404Component";
import { Container, Box } from "@chakra-ui/react";
export default function Page404() {
  return (
    <Container maxW={"7xl"}>
      <Box bg={"white"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <Page404Component />
      </Box>
    </Container>
  );
}

import { Container, Box } from "@chakra-ui/react";
import ContactComponent from "../components/ContactComponent";
export default function Contact() {
  return (
    <Container maxW={"7xl"}>
      <Box bg={"white"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <ContactComponent />
      </Box>
    </Container>
  );
}

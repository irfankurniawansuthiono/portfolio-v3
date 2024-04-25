import { Container, Box } from "@chakra-ui/react";
import ContactComponent from "../components/ContactComponent";
import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Container maxW={"7xl"}>
      <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <ContactComponent />
      </Box>
    </Container>
  );
}

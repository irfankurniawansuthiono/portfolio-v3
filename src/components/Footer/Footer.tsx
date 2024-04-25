import { Box, Container, Text } from "@chakra-ui/react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container
      maxW={"7xl"}
      py={5}
      as={"footer"}
      textAlign={"center"}
      w={"full"}
    >
      <Box
        backdropFilter={"blur(10px), saturate(180%)"}
        bg={"whiteAlpha.900"}
        boxShadow={"lg"}
        p={{ base: 5, sm: 4 }}
        rounded={"2xl"}
      >
        <Text as={"p"} fontWeight={"bold"}>
          &copy;{year} Irfan Kurniawan Suthiono
        </Text>
      </Box>
    </Container>
  );
}

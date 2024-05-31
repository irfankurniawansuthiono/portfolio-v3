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
        <Text as={"p"} fontSize={"xs"}>
          &copy;{year} Irfan Kurniawan Suthiono
        </Text>
        <Text as={"p"} fontSize={"xs"} color={"gray.500"}>
          Icons by{" "}
          <Text as={"a"} href="https://icons8.com" textDecoration={"underline"}>
            Icons8
          </Text>
        </Text>
      </Box>
    </Container>
  );
}

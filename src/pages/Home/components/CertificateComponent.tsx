import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import CertificateCard from "./certificate/CertificateCard";

import certificateList from "../../../assets/CertificateList/CertificateList";
export default function CertificateComponent() {
  return (
    <Container maxW={"7xl"} mt={8}>
      <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "4xl" }}
          color={"yellow.400"}
        >
          <Flex position="relative" padding="10" alignItems={"center"}>
            <Divider />
            <AbsoluteCenter bg={"whitesmoke"} px="4">
              CERTIFICATES
            </AbsoluteCenter>
          </Flex>
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {certificateList.reverse().map((certificate) => (
            <CertificateCard
              key={certificate.id}
              from={certificate.from}
              title={certificate.title}
              img={certificate.img}
              altImg={certificate.altImg}
              dateObtained={certificate.dateObtained}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

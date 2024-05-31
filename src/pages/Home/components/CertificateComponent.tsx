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
      <Box bg={"whitesmoke"} boxShadow={"xl"} rounded={"xl"} p={8}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "4xl" }}
          color={"yellow.400"}
        >
          <Flex
            position="relative"
            px={{ base: "0", sm: 5, md: 10, lg: "20" }}
            py={5}
            alignItems={"center"}
          >
            <Divider borderColor={"yellow.400"} />
            <AbsoluteCenter bg={"whitesmoke"} px="4">
              CERTIFICATES
            </AbsoluteCenter>
          </Flex>
        </Heading>
        <Heading textAlign={"center"} as="h6" size="xs">
          Total : {certificateList.length} Certificates
        </Heading>
        <SimpleGrid
          mt={{ base: 5, lg: 10 }}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {certificateList
            .slice()
            .reverse()
            .map((certificate) => (
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

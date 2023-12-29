import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import "animate.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectList from "../../../assets/ProjectsList/ProjectsList";
export default function ProjectComponent() {
  return (
    <Container maxW={"7xl"}>
      <Box
        bg={"whitesmoke"}
        boxShadow={"2xl"}
        rounded={"xl"}
        p={8}
        className="animate__animated animate__fadeIn"
      >
        <Heading
          textAlign={"center"}
          fontSize={{ base: "3xl", md: "4xl" }}
          color={"yellow.400"}
        >
          <Flex position="relative" padding="10" alignItems={"center"}>
            <Divider />
            <AbsoluteCenter bg="whitesmoke" px="4">
              PROJECTS
            </AbsoluteCenter>
          </Flex>
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          {ProjectList.slice()
            .reverse()
            .map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

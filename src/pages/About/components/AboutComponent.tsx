import { Container, Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import TechStackList from "../../../assets/TechStackList/TechStackList";
export const AboutComponent = () => {
  const year = new Date().getFullYear();
  return (
    <Container maxW={"7xl"}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={10}
        alignItems={"center"}
      >
        <Box
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"xl"}
          p={8}
          w={{ base: "100%", md: "50%" }}
        >
          <Flex flexDir={"column"} gap={5}>
            <Heading
              textAlign={"center"}
              bgColor={"yellow.400"}
              rounded={"2xl"}
              size={"lg"}
              py={1}
            >
              About Me
            </Heading>
            <Text as={"p"} textAlign={"left"}>
              Greetings! I'm irfan kurniawan suthiono, an enthusiastic React
              developer diving into the world of front-end development. As a
              passionate learner in the field, I'm on a journey to master the
              art of crafting engaging and responsive user interfaces using
              React. Driven by curiosity and a thirst for knowledge, I'm
              exploring the dynamic landscape of web development and honing my
              skills in building modern, user-friendly interfaces. My journey as
              a React developer is just beginning, and I'm excited about the
              endless possibilities for growth and innovation in this
              ever-evolving field. Join me on this learning adventure, where
              every line of code is a step towards creating seamless and
              visually appealing front-end experiences. Let's embark on this
              coding journey together!
            </Text>
          </Flex>
        </Box>
        <Flex flexDir={"column"} gap={2}>
          <Heading
            textAlign={"center"}
            bgColor={"yellow.400"}
            rounded={"2xl"}
            size={"lg"}
            py={1}
          >
            Profile
          </Heading>
          <Box bg={"white"} boxShadow={"2xl"} rounded={"xl"} p={8}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={5}
              flexDir={{ base: "column", md: "row" }}
            >
              <Image
                rounded={"2xl"}
                src="/home/profile-picture.jpg"
                alt="Profile Picture"
                w={{ base: "100%", md: "20%" }}
              />
              <Flex flexDir={"column"} gap={1}>
                <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>:</td>
                      <td>Irfan Kurniawan Suthiono</td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td>:</td>
                      <td>{year - 2004} years old</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>:</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>:</td>
                      <td>Padang, Sumatera Barat, Indonesia</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>Not Married</td>
                    </tr>
                  </tbody>
                </table>
              </Flex>
            </Flex>
          </Box>
          <Heading
            textAlign={"center"}
            bgColor={"yellow.400"}
            rounded={"2xl"}
            size={"lg"}
            py={1}
          >
            Tech Stack
          </Heading>
          <Box bg={"white"} boxShadow={"2xl"} rounded={"xl"} p={8}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              {TechStackList.map((item, index) => (
                <Image key={index} src={item.src} alt={item.alt} />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

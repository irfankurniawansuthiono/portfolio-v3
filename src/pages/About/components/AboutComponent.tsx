import { Container, Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import TechStackList from "../../../assets/TechStackList/TechStackList";
export const AboutComponent = () => {
  const year = new Date().getFullYear();
  return (
    <Container maxW={"7xl"}>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={10}
        alignItems={"center"}
        className="animate__animated animate__fadeIn"
      >
        <Box
          bg={"whitesmoke"}
          boxShadow={"2xl"}
          rounded={"xl"}
          p={8}
          w={{ base: "100%" }}
        >
          <Flex flexDir={"column"} gap={5} h={"full"}>
            <Heading
              textAlign={"center"}
              bgColor={"yellow.400"}
              rounded={"2xl"}
              size={"lg"}
              py={1}
            >
              About Me
            </Heading>
            <Text as={"p"} textAlign={"left"} lineHeight={"tall"}>
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
          <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
            <Flex
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={5}
              flexDir={{ base: "column", md: "row" }}
            >
              <Image
                rounded={"2xl"}
                src="/home/profile-picture.webp"
                alt="Profile Picture"
                w={{ base: "70%", md: "25%" }}
                loading="lazy"
              />
              <Flex
                flexDir={"column"}
                gap={1}
                p={5}
                bgColor={"gray.200"}
                rounded={"2xl"}
                w={"full"}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          Name
                        </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>
                          Irfan Kurniawan Suthiono
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          Age
                        </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>
                          {year - 2004} years old
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          Gender
                        </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>: </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>Male</Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          Address
                        </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>
                          Padang, Sumatra Barat
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Text
                          fontWeight={"bold"}
                          fontSize={{ base: "sm", sm: "md" }}
                        >
                          Nationality
                        </Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>:</Text>
                      </td>
                      <td>
                        <Text fontSize={{ base: "sm", sm: "md" }}>
                          Indonesia
                        </Text>
                      </td>
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
            mt={{ base: 5, lg: 0 }}
          >
            Tech Stack
          </Heading>
          <Box bg={"whitesmoke"} boxShadow={"2xl"} rounded={"xl"} p={8}>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"nowrap"}
              overflowX={"auto"}
              gap={2}
              pb={3}
              scroll-background={"red.100"}
            >
              {TechStackList.map((item, index) => (
                <Image
                  w={{ base: "25%", sm: "10%", md: "10%" }}
                  key={index}
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

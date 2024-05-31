import {
  Container,
  Box,
  Text,
  Heading,
  Flex,
  AbsoluteCenter,
  Image,
  Divider,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import TechStackList from "../../../assets/TechStackList/TechStackList";
export const AboutComponent = () => {
  const year = new Date().getFullYear();
  return (
    <Container maxW={"7xl"}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={10}
        alignItems={"center"}
        className="animate__animated animate__fadeIn"
      >
        <Box
          bg={"whitesmoke"}
          boxShadow={"xl"}
          rounded={"xl"}
          p={8}
          w={{ base: "full", sm: "full" }}
          flex={{ base: 1, lg: 1 }}
          display={"flex"}
          flexDir={"column"}
          gap={5}
          overflow={"hidden"}
        >
          <Heading
            textAlign={"center"}
            bgColor={"yellow.400"}
            rounded={"2xl"}
            size={"lg"}
            py={1}
          >
            Profile
          </Heading>
          <Flex
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={5}
            flexDir={{ base: "column", lg: "row" }}
          >
            <Box flex={0.5}>
              <Image
                rounded={"2xl"}
                src="/home/profile-picture.webp"
                alt="Profile Picture"
                w={{ base: "full" }}
                loading="lazy"
              />
            </Box>
            <Flex
              flex={1}
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
                      <Text fontSize={{ base: "sm", sm: "md" }}>Indonesia</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Flex>
          </Flex>
          <Box position={"relative"} mt={5} mb={5}>
            <Divider borderColor={"yellow.400"} />
            <AbsoluteCenter
              bgColor={"yellow.400"}
              px={4}
              borderRadius={"xl"}
              fontSize={".8em"}
              fontWeight={"50"}
            >
              Tech Stack
            </AbsoluteCenter>
          </Box>
          <Box rounded={"xl"} w={"full"} overflow={"hidden"}>
            <Swiper
              slidesPerView={useBreakpointValue({ base: 3, md: 4, lg: 5 })}
              spaceBetween={30}
              autoplay={{
                delay: 250,
                disableOnInteraction: false,
              }}
              style={{ display: "flex", flexWrap: "wrap" }}
              modules={[Autoplay]}
              loop={true}
            >
              {TechStackList.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="animate__animated animate__fadeIn"
                >
                  <Image src={item.src} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
        <Box bg={"whitesmoke"} boxShadow={"xl"} rounded={"xl"} p={8} flex={1}>
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
            <Text as={"p"} textAlign={"left"} lineHeight={"1.55em"}>
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
            <Box display={"flex"} justifyContent={"flex-end"} w={"full"}>
              <Button
                fontSize={{ base: "sm", sm: "md" }}
                as={Link}
                to="/projects"
                w={{ base: "50%", md: "50%", lg: "40%" }}
                colorScheme={"yellow"}
                rounded={"xl"}
                leftIcon={<GrProjects />}
              >
                My Portfolio
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

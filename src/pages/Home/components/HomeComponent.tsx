import {
  Container,
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export const HomeComponent = () => {
  const socialMediaLiat = [
    {
      id: 1,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/irfan-kurniawan-suthiono/",
      colorScheme: "linkedin",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/irfankurniawansuthiono",
      colorScheme: "gray",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      url: "https://wa.me/6281234567890",
      colorScheme: "whatsapp",
    },
    {
      id: 4,
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/irfan_suthiono",
      colorScheme: "pink",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <Box
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"xl"}
        p={8}
        textAlign={"center"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "space-around" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex
            flexDir={"column"}
            order={{ base: 2, md: 1 }}
            w={{ base: "100%", md: "50%" }}
          >
            <Flex flexDir={"column"}>
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                textAlign={{ base: "center", md: "left" }}
              >
                <Text as={"h1"}>Hi, I'm </Text>
                <Text as={"h4"} color={"yellow.400"}>
                  Irfan Kurniawan Suthiono
                </Text>
              </Heading>
              <Flex
                bgColor={"gray.200"}
                p={1}
                px={3}
                rounded={"lg"}
                flexDir={{ base: "column", md: "row" }}
                alignItems={"center"}
              >
                <Text>Active Student in &nbsp;</Text>
                <Flex
                  alignItems={"center"}
                  as={"a"}
                  target="_blank"
                  color={"red.400"}
                  _hover={{ color: "red.600" }}
                  href="https://www.google.co.id/maps/place/Universitas+Putra+Indonesia+%22YPTK%22,+Jl.+Raya+Lubuk+Begalung,+Lubuk+Begalung+Nan+XX,+Kec.+Lubuk+Begalung,+Kota+Padang,+Sumatera+Barat+25145/@-0.9591213,100.396741,17z/data=!4m6!3m5!1s0x2fd4b982fd776c89:0x4e9e1c8dcc9c55fb!8m2!3d-0.9591213!4d100.396741!16s%2Fg%2F1pzvxj4yp"
                >
                  <Text fontSize={{ base: "sm" }}>UPI YPTK Padang</Text>
                  <Icon as={MdOpenInNew} ml={1} />
                </Flex>
              </Flex>
            </Flex>
            <Text as={"p"} textAlign={"left"} mt={4}>
              I am a dedicated React developer with a passion for crafting
              engaging and user-friendly websites. With a strong foundation in
              front-end development, I specialize in creating dynamic and
              responsive user interfaces. My goal is to contribute to the
              seamless user experience and functionality of websites by
              leveraging my expertise in React and staying abreast of the latest
              web development trends. Eager to collaborate on innovative
              projects and bring ideas to life through clean and efficient code.
            </Text>
            <Flex
              gap={5}
              mt={2}
              justifyContent={{ base: "space-between", md: "left" }}
            >
              {socialMediaLiat.map((item) => (
                <Button
                  key={item.id}
                  rounded={"xl"}
                  colorScheme={item.colorScheme}
                  as={"a"}
                  target={"_blank"}
                  href={item.url}
                >
                  {item.icon}
                </Button>
              ))}
            </Flex>
            <Flex
              mt={4}
              gap={5}
              w={"full"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Button
                w={{ base: "100%", md: "50%" }}
                colorScheme={"yellow"}
                onClick={() => {}}
                rounded={"xl"}
                isDisabled
                leftIcon={<IoMdDownload />}
              >
                CV Download
              </Button>
              <Button
                as={Link}
                to="/projects"
                w={{ base: "100%", md: "50%" }}
                colorScheme={"yellow"}
                rounded={"xl"}
                leftIcon={<GrProjects />}
              >
                View Portfolio
              </Button>
            </Flex>
          </Flex>
          <Flex
            w={{ base: "100%", md: "sm" }}
            justifyContent={"center"}
            alignItems={"center"}
            order={{ base: 1, md: 2 }}
          >
            <Image
              rounded={"2xl"}
              src="/home/profile-picture.jpg"
              alt="Profile Picture"
            />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

import {
  Container,
  Box,
  Text,
  Heading,
  Button,
  IconButton,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react";
import "animate.css";
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
      url: "https://www.linkedin.com/in/irfankurniawans",
      colorScheme: "linkedin",
      name: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/irfankurniawansuthiono",
      colorScheme: "blackAlpha",
      name: "GitHub",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      url: "https://wa.me/6281234567890",
      colorScheme: "whatsapp",
      name: "WhatsApp",
    },
    {
      id: 4,
      icon: <AiFillInstagram />,
      url: "https://www.instagram.com/irfan_suthiono",
      colorScheme: "pink",
      name: "Instagram",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <Box
        bg={"whitesmoke"}
        boxShadow={"xl"}
        rounded={"xl"}
        p={8}
        className={"animate__animated animate__fadeIn"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", sm: "space-around" }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 5 }}
        >
          <Flex
            flexDir={"column"}
            order={{ base: 2, md: 1 }}
            w={{ base: "100%", md: "50%" }}
          >
            <Flex flexDir={"column"}>
              <Flex
                gap={1}
                justifyContent={{ base: "center", md: "flex-start" }}
                flexDir={{ base: "column", sm: "row", md: "column" }}
              >
                <Heading
                  fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                >
                  Hi, I'm
                </Heading>
                <Heading
                  as={"h3"}
                  color={"yellow.400"}
                  fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                  mb={3}
                >
                  Irfan Kurniawan
                </Heading>
              </Flex>

              <Flex
                bgColor={"gray.200"}
                p={1}
                px={3}
                rounded={"lg"}
                fontSize={{ base: "sm", sm: "md" }}
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={{ base: "flex-start", sm: "center" }}
              >
                <Text>Active Student at&nbsp;</Text>
                <Box
                  as={"a"}
                  target="_blank"
                  color={"red.400"}
                  flexDir={"row"}
                  _hover={{ color: "red.600" }}
                  href="https://www.google.co.id/maps/place/Universitas+Putra+Indonesia+%22YPTK%22,+Jl.+Raya+Lubuk+Begalung,+Lubuk+Begalung+Nan+XX,+Kec.+Lubuk+Begalung,+Kota+Padang,+Sumatera+Barat+25145/@-0.9591213,100.396741,17z/data=!4m6!3m5!1s0x2fd4b982fd776c89:0x4e9e1c8dcc9c55fb!8m2!3d-0.9591213!4d100.396741!16s%2Fg%2F1pzvxj4yp"
                >
                  <Flex
                    fontSize={{ base: "sm", sm: "md" }}
                    alignItems={"center"}
                  >
                    UPI YPTK Padang <Icon as={MdOpenInNew} ml={1} />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex
              gap={5}
              mt={4}
              justifyContent={{
                base: "space-around",
                sm: "center",
                md: "flex-start",
              }}
            >
              {socialMediaLiat.map((item) => (
                <IconButton
                  p={{ base: 2, sm: 5, md: 2 }}
                  key={item.id}
                  rounded={"xl"}
                  colorScheme={item.colorScheme}
                  as={"a"}
                  target={"_blank"}
                  href={item.url}
                  aria-label={item.name}
                  icon={item.icon}
                />
              ))}
            </Flex>
            <Flex
              mt={4}
              gap={5}
              w={"full"}
              flexDir={{ base: "column", sm: "row" }}
            >
              <Button
                as={"a"}
                href="cv/irfan-kurniawan-suthiono-cv.pdf"
                download={"irfan-kurniawan-suthiono-cv.pdf"}
                w={{ base: "100%", md: "50%" }}
                colorScheme={"yellow"}
                onClick={() => {}}
                rounded={"xl"}
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
            w={{ base: "100%", sm: "sm" }}
            justifyContent={"center"}
            alignItems={"center"}
            order={{ base: 1, md: 2 }}
            rounded={"2xl"}
          >
            <Image
              rounded={"2xl"}
              src="/home/profile-picture.webp"
              alt="Profile Picture"
            />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

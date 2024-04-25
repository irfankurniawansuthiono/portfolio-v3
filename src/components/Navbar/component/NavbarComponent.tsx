import { Box, Flex, HStack, Icon, Button, Text } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const NavbarComponent = () => {
  const location = useLocation();
  const buttonList = [
    {
      name: "Home",
      icon: IoHomeOutline,
      path: "/",
    },
    {
      name: "About",
      icon: CgProfile,
      path: "/about",
    },
    {
      name: "Projects",
      icon: GrProjects,
      path: "/projects",
    },
    {
      name: "Contact",
      icon: FiPhone,
      path: "/contact",
    },
  ];
  return (
    <Box py={5} w={"100%"}>
      <Flex minH={"60px"} justifyContent={"center"} alignItems={"center"}>
        <Box
          backdropFilter={"blur(10px), saturate(180%)"}
          bg={"whiteAlpha.900"}
          boxShadow={"lg"}
          p={{ base: 5, sm: 4 }}
          rounded={"2xl"}
          pos={"fixed"}
          zIndex={999}
          className={"animate__animated animate__fadeInDown animate__once"}
        >
          <HStack justifyContent={"center"} gap={5}>
            {buttonList.map((item) => (
              <Button
                key={item.name}
                as={Link}
                to={item.path}
                boxShadow={"2xl"}
                rounded={"xl"}
                bgColor={
                  location.pathname === item.path ? "yellow.400" : "gray.200"
                }
                _hover={{ base: { opacity: 1 }, xl: { opacity: 0.6 } }}
              >
                <Flex alignItems={"center"} gap={2}>
                  <Icon as={item.icon} />
                  <Text display={{ base: "none", sm: "block" }}>
                    {item.name}
                  </Text>
                </Flex>
              </Button>
            ))}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

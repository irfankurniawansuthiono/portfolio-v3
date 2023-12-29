import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { CgChevronDown } from "react-icons/cg";
import { TbView360 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
type CertificateCardProps = {
  category: string;
  title: string;
  img: string;
  altImg: string;
  dateFinished: string;
  repository?: string;
  liveView: string;
};
export default function ProjectCard({
  category,
  title,
  img,
  altImg,
  dateFinished,
  repository,
  liveView,
}: CertificateCardProps) {
  return (
    <Center py={{ base: 1, md: 6 }}>
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"xl"}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"100%"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <img src={img} alt={altImg} />
        </Box>
        <Stack>
          <Text
            color={"yellow.400"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {category}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={"gray.700"}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Menu isLazy>
            <MenuButton
              as={Button}
              rightIcon={<CgChevronDown />}
              colorScheme="yellow"
            >
              Actions
            </MenuButton>
            <MenuList>
              {repository ? (
                <MenuItem
                  icon={<FaGithub />}
                  as={Link}
                  target={"_blank"}
                  to={repository}
                >
                  Repository
                </MenuItem>
              ) : null}
              <MenuItem
                icon={<TbView360 />}
                as={Link}
                to={liveView}
                target={"_blank"}
              >
                Live-preview
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Text color={"gray.500"}>{dateFinished}</Text>
        </Stack>
      </Box>
    </Center>
  );
}

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
} from "@chakra-ui/react";
type CertificateCardProps = {
  from: string;
  title: string;
  img: string;
  altImg: string;
  dateObtained: string;
};
export default function CertificateCard({
  from,
  title,
  img,
  altImg,
  dateObtained,
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
        h={"100%"}
      >
        <Box bg={"gray.200"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image src={img} alt={altImg} />
        </Box>
        <Stack>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Text
              color={"yellow.400"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {from}
            </Text>
            <Text color={"gray.500"}>{dateObtained}</Text>
          </HStack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={"gray.700"}
            fontFamily={"body"}
            fontSize={{ base: "md", sm: "2xl" }}
          >
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}

import { Box, Center, Heading, Text, Stack, Avatar } from "@chakra-ui/react";
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
            {from}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={"gray.700"}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={"/home/profile-picture.jpg"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Irfan Kurniawan Suthiono</Text>
            <Text color={"gray.500"}>{dateObtained}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

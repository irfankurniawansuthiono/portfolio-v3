import { Box, Center, Image } from "@chakra-ui/react";

type CertificateCardProps = {
  id: number;
  from: string;
  title: string;
  img: string;
  altImg: string;
  dateObtained: string;
};
export default function CertificateCard({ img, altImg }: CertificateCardProps) {
  return (
    <>
      <Center
        py={{ base: 1, md: 6 }}
        onClick={() => window.open(img, "_blank")}
      >
        <Box
          maxW={"445px"}
          w={"full"}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={"white"}
          boxShadow={"xl"}
          rounded={"md"}
          overflow={"hidden"}
          h={"100%"}
        >
          <Box bg={"gray.200"}>
            <Image src={img} alt={altImg} />
          </Box>
          {/* <Stack p={2}>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Text
              color={"yellow.400"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
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
        </Stack> */}
        </Box>
      </Center>
    </>
  );
}

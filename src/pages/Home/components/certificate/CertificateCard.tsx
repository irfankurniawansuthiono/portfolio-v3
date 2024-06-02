import { Box, Center, Image } from "@chakra-ui/react";
import { useState } from "react";
import { usePreviewCertificate } from "../../utils/zustand";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

type CertificateCardProps = {
  id: number;
  from: string;
  title: string;
  img: string;
  altImg: string;
  dateObtained: string;
};

export default function CertificateCard({
  id,
  img,
  altImg,
}: CertificateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const clickHandle = () => {
    // Move this hook usage inside the component
    usePreviewCertificate.setState({ previewCertificate: true });
    // Do something with the `previewCertificate` value if needed
  };

  return (
    <Link to={`#certificate_${id}`}>
      <Center
        onClick={() => clickHandle()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
        }}
        overflow={"hidden"}
      >
        <Box
          maxW={"445px"}
          w={"full"}
          bg={"white"}
          boxShadow={"xl"}
          rounded={"md"}
          h={"100%"}
        >
          <Box bg={"gray.200"}>
            <Image src={img} alt={altImg} />
            {isHovered && (
              <Box
                className="animate__animated animate__fadeIn animate__faster"
                bgColor={"blackAlpha.700"}
                pos={"absolute"}
                top={0}
                right={0}
                bottom={0}
                display={"flex"}
                left={0}
                color="white"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <IoMdEye
                  size={40}
                  className="animate__animated animate__zoomIn animate__faster"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Center>
    </Link>
  );
}

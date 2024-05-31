import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ position: "fixed", bottom: "2rem", right: "2rem" }}
    >
      <Button
        rounded="xl"
        onClick={scrollToTop}
        colorScheme="yellow"
        // size={{ base: "md", md: "md", lg: "lg" }}
        _hover={{ bg: "yellow.500" }}
        _active={{ bg: "yellow.600" }}
        _focus={{ boxShadow: "outline" }}
      >
        <BsArrowUp />
      </Button>
    </motion.div>
  );
};

export default BackToTop;

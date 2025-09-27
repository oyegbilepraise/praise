import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  VStack,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiDownload, HiEye, HiDocumentText } from "react-icons/hi";

const MotionBox = motion(Box);

const CVCard = () => {
  const { colorMode } = useColorMode();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/documents/Oyegbile_Praise_-_Software_Developer.pdf";
    link.download = "Oyegbile_Praise_-_Software_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    window.open(
      "/assets/documents/Oyegbile_Praise_-_Software_Developer.pdf",
      "_blank"
    );
  };

  return (
    <Container maxW="6xl" py="20">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Box
          bg={colorMode === "light" ? "white" : "gray.800"}
          borderRadius="2xl"
          p={8}
          shadow="xl"
          border="1px"
          borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
          position="relative"
          overflow="hidden"
        >
          {/* Background decoration */}
          <Box
            position="absolute"
            top="-50px"
            right="-50px"
            width="150px"
            height="150px"
            bg={colorMode === "light" ? "blue.50" : "blue.900"}
            borderRadius="full"
            opacity="0.3"
          />

          <VStack spacing={6} align="stretch" position="relative" zIndex={1}>
            {/* Header */}
            <Flex
              align="center"
              justify="space-between"
              flexWrap="wrap"
              gap={4}
            >
              <HStack spacing={3}>
                <Box
                  p={3}
                  bg={colorMode === "light" ? "blue.100" : "blue.900"}
                  borderRadius="xl"
                >
                  <Icon
                    as={HiDocumentText}
                    w={6}
                    h={6}
                    color={colorMode === "light" ? "blue.600" : "blue.300"}
                  />
                </Box>
                <VStack align="start" spacing={0}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={colorMode === "light" ? "gray.800" : "white"}
                  >
                    My Resume
                  </Text>
                  <Text
                    fontSize="sm"
                    color={colorMode === "light" ? "gray.600" : "gray.400"}
                  >
                    Full Stack Developer
                  </Text>
                </VStack>
              </HStack>
            </Flex>

            <Divider
              borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
            />

            {/* Description */}
            <Text
              fontSize="md"
              color={colorMode === "light" ? "gray.700" : "gray.300"}
              lineHeight="1.6"
            >
              Download my comprehensive resume to learn more about my
              experience, skills, and projects. It includes detailed information
              about my technical expertise and professional journey as a full
              stack developer.
            </Text>

            {/* Action Buttons */}
            <HStack spacing={4} pt={2}>
              <Button
                onClick={handleDownloadCV}
                leftIcon={<HiDownload />}
                size="lg"
                bg={colorMode === "light" ? "blue.600" : "blue.500"}
                color="white"
                _hover={{
                  bg: colorMode === "light" ? "blue.700" : "blue.600",
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
                _active={{
                  bg: colorMode === "light" ? "blue.800" : "blue.700",
                  transform: "translateY(0)",
                }}
                borderRadius="xl"
                px={6}
                transition="all 0.2s"
              >
                Download RESUME
              </Button>

              <Button
                onClick={handleViewCV}
                leftIcon={<HiEye />}
                size="lg"
                variant="outline"
                borderColor={colorMode === "light" ? "gray.300" : "gray.600"}
                color={colorMode === "light" ? "gray.700" : "gray.300"}
                _hover={{
                  bg: colorMode === "light" ? "gray.50" : "gray.700",
                  borderColor: colorMode === "light" ? "gray.400" : "gray.500",
                  transform: "translateY(-2px)",
                  shadow: "md",
                }}
                _active={{
                  bg: colorMode === "light" ? "gray.100" : "gray.800",
                  transform: "translateY(0)",
                }}
                borderRadius="xl"
                px={6}
                transition="all 0.2s"
              >
                Preview
              </Button>
            </HStack>
          </VStack>
        </Box>
      </MotionBox>
    </Container>
  );
};

export default CVCard;

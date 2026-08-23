import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  VStack,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { HiDownload, HiEye } from "react-icons/hi";

const MotionBox = motion.create(Box);

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const CVCard = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const promptColor = isLight ? "gray.400" : "gray.500";
  const mutedColor = isLight ? "gray.500" : "gray.400";
  const textColor = isLight ? "gray.800" : "gray.100";

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
    <Container maxW="6xl" py={{ base: 12, md: 16 }}>
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Box
          bg={isLight ? "white" : "#1a1a1a"}
          borderRadius="2xl"
          shadow="xl"
          border="1px"
          borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
          overflow="hidden"
        >
          {/* Terminal title bar */}
          <Flex
            align="center"
            px={4}
            py={3}
            bg={isLight ? "gray.100" : "whiteAlpha.100"}
            borderBottom="1px"
            borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
          >
            <HStack spacing={2}>
              <Box w={3} h={3} borderRadius="full" bg={isLight ? "gray.300" : "whiteAlpha.400"} />
              <Box w={3} h={3} borderRadius="full" bg={isLight ? "gray.400" : "whiteAlpha.500"} />
              <Box w={3} h={3} borderRadius="full" bg={isLight ? "gray.500" : "whiteAlpha.600"} />
            </HStack>
            <Text
              flex="1"
              textAlign="center"
              fontFamily="mono"
              fontSize="xs"
              color={mutedColor}
              userSelect="none"
            >
              praise@portfolio: ~/resume
            </Text>
            {/* Spacer to keep the title optically centered */}
            <Box w="52px" />
          </Flex>

          {/* Terminal body */}
          <VStack
            align="stretch"
            spacing={5}
            p={{ base: 5, md: 8 }}
            fontFamily="mono"
          >
            <Box>
              <Text fontSize="sm" color={promptColor}>
                <Text as="span" mr={2}>$</Text>whoami
              </Text>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color={textColor}
                mt={1}
              >
                Oyegbile Praise{" "}
                <Text as="span" fontWeight="normal" color={mutedColor}>
                  — Full Stack Developer
                </Text>
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm" color={promptColor}>
                <Text as="span" mr={2}>$</Text>cat resume.pdf
              </Text>
              <Text fontSize="sm" color={mutedColor} mt={1} lineHeight="1.8">
                # Experience, skills and projects — my full journey
                <br />
                # as a full stack developer, in one PDF.
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm" color={promptColor}>
                <Text as="span" mr={2}>$</Text>
                <Text as="span" color={textColor}>open resume.pdf</Text>
                <Box
                  as="span"
                  display="inline-block"
                  w="8px"
                  h="1em"
                  ml={1}
                  verticalAlign="text-bottom"
                  bg={textColor}
                  animation={`${blink} 1.1s step-end infinite`}
                />
              </Text>
            </Box>

            {/* Action Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              pt={1}
              fontFamily="body"
            >
              <Button
                onClick={handleDownloadCV}
                leftIcon={<HiDownload />}
                size="lg"
                width={{ base: "full", sm: "auto" }}
                bg={isLight ? "gray.800" : "gray.200"}
                color={isLight ? "white" : "gray.900"}
                _hover={{
                  bg: isLight ? "gray.700" : "gray.50",
                  transform: "translateY(-2px)",
                  shadow: "lg",
                }}
                _active={{
                  bg: isLight ? "gray.600" : "gray.400",
                  transform: "translateY(0)",
                }}
                borderRadius="xl"
                px={6}
                transition="all 0.2s"
              >
                Download Resume
              </Button>

              <Button
                onClick={handleViewCV}
                leftIcon={<HiEye />}
                size="lg"
                width={{ base: "full", sm: "auto" }}
                variant="outline"
                borderColor={isLight ? "gray.300" : "whiteAlpha.400"}
                color={isLight ? "gray.700" : "gray.300"}
                _hover={{
                  bg: isLight ? "blackAlpha.50" : "whiteAlpha.100",
                  borderColor: isLight ? "gray.400" : "whiteAlpha.500",
                  transform: "translateY(-2px)",
                  shadow: "md",
                }}
                _active={{
                  bg: isLight ? "blackAlpha.100" : "whiteAlpha.200",
                  transform: "translateY(0)",
                }}
                borderRadius="xl"
                px={6}
                transition="all 0.2s"
              >
                Preview
              </Button>
            </Stack>
          </VStack>
        </Box>
      </MotionBox>
    </Container>
  );
};

export default CVCard;

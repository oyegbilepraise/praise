import Head from "next/head";
import NextLink from "next/link";
import { Box, Button, Container, Flex, Image, Text, useColorMode, useDisclosure, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav.jsx";
import ContactModal from "../components/ContactModal.jsx";

const MotionBox = motion.create(Box);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
  viewport: { once: true },
});

const About = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bodyColor = isLight ? "gray.700" : "gray.300";

  return (
    <>
      <Head>
        <title>About — Oyegbile Praise</title>
      </Head>
      <Navbar />
      <SideNav />

      <Container maxW="6xl" pt={{ base: 10, md: 16 }} pb="24">
        <MotionBox {...fadeUp(0)}>
          <Text fontFamily="mono" fontSize="sm" color={isLight ? "gray.500" : "gray.400"}>
            $ cat about.md
          </Text>
          <Text as="h1" fontSize={{ base: "2rem", md: "2.6rem" }} fontWeight="medium" mt="2">
            About Praise
          </Text>
        </MotionBox>

        <MotionBox {...fadeUp(0.1)} mt="10">
          <Image
            src="/images/profile.jpg"
            alt="Oyegbile Praise"
            w="full"
            maxH="440px"
            objectFit="cover"
            objectPosition="center 30%"
            borderRadius="2xl"
            border="1px solid"
            borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
            filter="grayscale(100%)"
            transition="filter 0.4s ease"
            _hover={{ filter: "grayscale(0%)" }}
          />
          <Text fontFamily="mono" fontSize="xs" mt="3" color={isLight ? "gray.500" : "gray.400"}>
            # Lagos, Nigeria — where most of the building happens
          </Text>
        </MotionBox>

        <VStack align="stretch" spacing="7" mt="14" maxW="760px">
          <MotionBox {...fadeUp(0)}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9" color={bodyColor}>
              I&apos;m Oyegbile Praise, a full stack and mobile developer based in Lagos,
              Nigeria. These days I split my time between Statisense — where I drive AI
              implementation that turns complex data into business intelligence — and
              ILEYAH, the real estate platform I co-founded and lead as CTO.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0)}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9" color={bodyColor}>
              I got my start at Soft Quest in Ogbomoso, training and certifying as both a
              frontend and a backend developer. From there I went deep into fintech at Ajo
              Bank, spending three years building their Flutter app — real-time payments,
              loan management, OTP and biometric authentication — shipped across iOS and
              Android. Along the way I built an agritech product for Airsmat in the UK
              that maps farm sites and turns soil data into AI-driven advice for farmers,
              and freelanced Flutter apps for companies like Uphoria, Steady Steps and 440
              Global Shopping.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0)}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9" color={bodyColor}>
              In 2023 I co-founded ILEYAH because I believe housing in Nigeria is a
              technology problem as much as a money problem. We help tenants find
              affordable apartments and pay rent in installments — reshaping what it
              means to have a roof over your head for the next generation.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0)}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9" color={bodyColor}>
              My toolbox runs the whole stack: JavaScript and TypeScript across React,
              Next.js, Vue and Angular on the web; Flutter and Dart on mobile; Node.js,
              NestJS and FastAPI on the backend over MySQL, MongoDB and PostgreSQL. Lately
              AI tools sit in the loop every day — Claude Code, Cursor, LangChain, Ollama.
              I try not to be precious about any of it: the stack is a toolbox, and the
              right tool is the one that solves the problem in front of you.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0)}>
            <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.9" color={bodyColor}>
              Off the clock you&apos;ll find me on side projects and experimenting with
              whatever AI makes possible this month. If any of this sounds interesting,
              I&apos;d love to hear from you.
            </Text>
          </MotionBox>

          <MotionBox {...fadeUp(0)}>
            <Flex gap="4" pt="4" direction={{ base: "column", sm: "row" }}>
              <Button
                onClick={onOpen}
                rightIcon={<HiArrowRight />}
                rounded="full"
                px="6"
                size="lg"
                width={{ base: "full", sm: "auto" }}
                backgroundColor={isLight ? "gray.800" : "gray.200"}
                color={isLight ? "#fff" : "gray.900"}
                _hover={{ background: isLight ? "gray.700" : "gray.50" }}
                _active={{ background: isLight ? "gray.600" : "gray.400" }}
              >
                Get in touch
              </Button>
              <Button
                as={NextLink}
                href="/#resume"
                leftIcon={<HiDownload />}
                rounded="full"
                px="6"
                size="lg"
                width={{ base: "full", sm: "auto" }}
                variant="outline"
                borderColor={isLight ? "gray.300" : "whiteAlpha.400"}
                color={isLight ? "gray.700" : "gray.300"}
                _hover={{ bg: isLight ? "blackAlpha.50" : "whiteAlpha.100" }}
              >
                Grab my resume
              </Button>
            </Flex>
          </MotionBox>
        </VStack>
      </Container>

      <Container maxW="6xl" as="footer" py="10">
        <Text fontSize="lg">
          &copy; Oyegbile Praise {new Date().getFullYear()}
        </Text>
      </Container>

      <ContactModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default About;

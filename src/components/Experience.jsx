import { Box, Container, Flex, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const roles = [
  {
    role: "Software Developer",
    company: "Statisense",
    date: "JAN 2024 — PRESENT",
    location: "Lagos, Nigeria",
    current: true,
    summary:
      "Driving AI implementation that turns complex data into business intelligence, and using data analysis to sharpen product features and performance.",
  },
  {
    role: "Co-founder & CTO",
    company: "ILEYAH",
    date: "MAY 2023 — PRESENT",
    location: "Lagos, Nigeria",
    current: true,
    summary:
      "Leading the technology roadmap and frontend engineering for a platform that helps tenants find affordable apartments and pay rent in installments.",
  },
  {
    role: "Mobile Developer",
    company: "Ajo Bank",
    date: "JAN 2022 — APR 2025",
    location: "Lagos, Nigeria",
    current: false,
    summary:
      "Built and maintained the fintech mobile app in Flutter — secure payments, loan management, OTP and biometric auth — shipped across iOS and Android.",
  },
  {
    role: "Mobile Developer",
    company: "Airsmat",
    date: "JAN 2024 — JAN 2025",
    location: "United Kingdom",
    current: false,
    summary:
      "Built a farm-mapping app that pairs soil data with AI analysis to guide farmers, plus the company website and an admin dashboard that boosted productivity.",
  },
  {
    role: "Full Stack Software Engineer",
    company: "Soft Quest Incorporated",
    date: "JAN 2020 — DEC 2021",
    location: "Ogbomoso, Nigeria",
    current: false,
    summary:
      "Trained and certified as both a frontend and backend developer while building full stack projects end to end.",
  },
];

const Experience = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  const lineColor = isLight ? "gray.200" : "whiteAlpha.300";
  const dotBorder = isLight ? "gray.800" : "gray.200";
  const pageBg = isLight ? "#f6ffff" : "#0e0e0e";

  return (
    <Container maxW="6xl" py={{ base: 12, md: 16 }}>
      <Text fontFamily="mono" fontSize="sm" color={isLight ? "gray.500" : "gray.400"}>
        $ git log --oneline experience
      </Text>
      <Text fontSize={{ base: "1.7rem", md: "2.2rem" }} maxW="550" fontWeight="medium" mt="2">
        Where I&apos;ve been building
      </Text>

      <Box mt="16" ml={{ base: 1, md: 2 }} borderLeft="1px" borderColor={lineColor} pl={{ base: 6, md: 10 }}>
        <VStack align="stretch" spacing="12">
          {roles.map((item, index) => (
            <MotionBox
              key={`${item.company}-${item.role}`}
              position="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Timeline dot — filled for current roles, hollow for past */}
              <Box
                position="absolute"
                left={{ base: "-31px", md: "-47px" }}
                top="6px"
                w="13px"
                h="13px"
                borderRadius="full"
                border="2px solid"
                borderColor={dotBorder}
                bg={item.current ? dotBorder : pageBg}
              />

              <Flex
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                gap={{ base: 1, md: 3 }}
              >
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                  {item.role}
                  <Text as="span" fontWeight="normal" color={isLight ? "gray.500" : "gray.400"}>
                    {" "}· {item.company}
                  </Text>
                </Text>
                {item.current && (
                  <Text
                    fontFamily="mono"
                    fontSize="xs"
                    px={2}
                    py={0.5}
                    borderRadius="md"
                    border="1px"
                    borderColor={isLight ? "gray.300" : "whiteAlpha.400"}
                    color={isLight ? "gray.600" : "gray.300"}
                  >
                    HEAD
                  </Text>
                )}
              </Flex>

              <Text
                fontFamily="mono"
                fontSize="xs"
                mt="1"
                color={isLight ? "gray.500" : "gray.400"}
              >
                {item.date} · {item.location}
              </Text>

              <Text
                fontSize="md"
                mt="3"
                maxW="640px"
                lineHeight="1.7"
                color={isLight ? "gray.600" : "gray.300"}
              >
                {item.summary}
              </Text>
            </MotionBox>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Experience;

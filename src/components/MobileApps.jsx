import { Box, Button, Container, Flex, Grid, Image, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import apps from "../lib/apps";
import { useMixpanel } from "../hooks/use-mixpanel.js";

const MotionBox = motion.create(Box);

const PLACEHOLDER_COUNT = 3;

const MobileApps = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const { track } = useMixpanel();

  const mutedColor = isLight ? "gray.500" : "gray.400";
  const frameBorder = isLight ? "gray.200" : "whiteAlpha.300";

  const storeButtonProps = {
    as: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    rounded: "30",
    px: "5",
    size: { base: "sm", md: "md" },
    color: isLight ? "#fff" : "gray.900",
    backgroundColor: isLight ? "gray.800" : "gray.200",
    _hover: { background: isLight ? "gray.700" : "gray.50" },
    _active: { background: isLight ? "gray.600" : "gray.400" },
  };

  return (
    <Container maxW="6xl" py={{ base: 12, md: 16 }}>
      <Text fontFamily="mono" fontSize="sm" color={mutedColor}>
        $ ls ~/apps
      </Text>
      <Text as="h2" fontSize={{ base: "1.7rem", md: "2.2rem" }} maxW="550" fontWeight="medium" mt="2">
        Apps in the stores
      </Text>

      <VStack align="stretch" spacing={{ base: 16, md: 20 }} mt="16">
        {apps.map((app, index) => (
          <MotionBox
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
              gap={{ base: 8, lg: 12 }}
              alignItems="center"
            >
              <Box>
                <Text fontFamily="mono" fontSize="xs" textTransform="uppercase" color={mutedColor}>
                  {app.company}
                </Text>
                <Text as="h3" fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold" mt="1">
                  {app.title}
                </Text>
                <Text
                  fontSize="md"
                  mt="3"
                  maxW="480px"
                  lineHeight="1.7"
                  color={isLight ? "gray.600" : "gray.300"}
                >
                  {app.description}
                </Text>
                <Flex gap="3" mt="6" wrap="wrap">
                  {!!app.appStore && (
                    <Button
                      {...storeButtonProps}
                      href={app.appStore}
                      leftIcon={<FaApple />}
                      onClick={() => track(`Opened App Store - ${app.title}`)}
                    >
                      App Store
                    </Button>
                  )}
                  {!!app.playStore && (
                    <Button
                      {...storeButtonProps}
                      href={app.playStore}
                      leftIcon={<FaGooglePlay />}
                      onClick={() => track(`Opened Google Play - ${app.title}`)}
                    >
                      Google Play
                    </Button>
                  )}
                </Flex>
              </Box>

              <Flex
                gap={{ base: 3, md: 4 }}
                overflowX="auto"
                pb="2"
                sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
              >
                {app.screenshots.length > 0
                  ? app.screenshots.map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`${app.title} screenshot ${i + 1}`}
                        flexShrink="0"
                        w={{ base: "150px", md: "190px" }}
                        aspectRatio="9 / 19.5"
                        objectFit="cover"
                        rounded="2xl"
                        border="1px"
                        borderColor={frameBorder}
                      />
                    ))
                  : Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
                      <Flex
                        key={i}
                        flexShrink="0"
                        w={{ base: "150px", md: "190px" }}
                        aspectRatio="9 / 19.5"
                        rounded="2xl"
                        border="1px dashed"
                        borderColor={frameBorder}
                        bg={isLight ? "blackAlpha.50" : "whiteAlpha.50"}
                        align="center"
                        justify="center"
                        color={mutedColor}
                      >
                        <FiSmartphone size="22" />
                      </Flex>
                    ))}
              </Flex>
            </Grid>
          </MotionBox>
        ))}
      </VStack>
    </Container>
  );
};

export default MobileApps;

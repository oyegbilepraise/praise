import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Flex, Text, VStack, useColorMode } from "@chakra-ui/react";
import { FiHome, FiUser, FiFolder, FiBriefcase, FiLayers, FiFileText } from "react-icons/fi";

const sections = [
  { id: "home", href: "/#home", label: "~/home", icon: FiHome },
  { id: "about", href: "/about", label: "~/about", icon: FiUser },
  { id: "projects", href: "/#projects", label: "~/projects", icon: FiFolder },
  { id: "experience", href: "/#experience", label: "~/experience", icon: FiBriefcase },
  { id: "stack", href: "/#stack", label: "~/stack", icon: FiLayers },
  { id: "resume", href: "/#resume", label: "~/resume", icon: FiFileText },
];

const SideNav = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";
  const { pathname } = useRouter();
  const onAboutPage = pathname === "/about";
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (onAboutPage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Fires when a section crosses the middle band of the viewport
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onAboutPage]);

  return (
    <Box
      as="nav"
      aria-label="Section navigation"
      role="group"
      position="fixed"
      right={{ base: 3, md: 5 }}
      top="50%"
      transform="translateY(-50%)"
      zIndex="100"
      display={{ base: "none", md: "block" }}
    >
      <VStack
        spacing={1}
        p={2}
        borderRadius="2xl"
        border="1px"
        borderColor={isLight ? "gray.200" : "whiteAlpha.300"}
        bg={isLight ? "whiteAlpha.700" : "blackAlpha.500"}
        backdropFilter="blur(8px)"
        shadow="md"
        align="stretch"
      >
        {sections.map(({ id, href, label, icon: IconComp }) => {
          const isActive = onAboutPage ? id === "about" : active === id;
          return (
            <Flex
              key={id}
              as={NextLink}
              href={href}
              align="center"
              p={2.5}
              borderRadius="xl"
              bg={isActive ? (isLight ? "gray.800" : "gray.200") : "transparent"}
              color={
                isActive
                  ? isLight ? "white" : "gray.900"
                  : isLight ? "gray.600" : "gray.300"
              }
              transition="all 0.2s"
              _hover={{
                bg: isActive
                  ? isLight ? "gray.700" : "gray.50"
                  : isLight ? "blackAlpha.50" : "whiteAlpha.200",
              }}
            >
              <IconComp size="16" />
              <Text
                fontFamily="mono"
                fontSize="xs"
                maxW="0"
                opacity="0"
                overflow="hidden"
                whiteSpace="nowrap"
                transition="all 0.25s ease"
                _groupHover={{ maxW: "130px", opacity: 1, ml: 2 }}
              >
                {label}
              </Text>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
};

export default SideNav;

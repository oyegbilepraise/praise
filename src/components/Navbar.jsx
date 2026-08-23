import { Box, Container, HStack, IconButton, Link, Spacer, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo.jsx";

const navLinks = [
  { href: "/", label: "~/home" },
  { href: "/about", label: "~/about" },
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { pathname } = useRouter();

  return (
    <Box width="full" as="nav">
      <Container maxW="6xl" height="120px" display="flex" alignItems="center">
        <Link as={NextLink} href="/" display="flex" _hover={{ opacity: 0.8 }}>
          <Logo/>
        </Link>
        <Spacer/>
        <HStack spacing="6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              as={NextLink}
              href={href}
              fontFamily="mono"
              fontSize="sm"
              fontWeight={pathname === href ? "bold" : "normal"}
              opacity={pathname === href ? 1 : 0.7}
              _hover={{ opacity: 1, textDecoration: "none" }}
            >
              <Text as="span">{label}</Text>
            </Link>
          ))}
          {
            isDark ? (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable light mode"
                icon={ <FiSun size="20"/> }
              />
            ) : (
              <IconButton
                rounded="12"
                onClick={ toggleColorMode }
                aria-label="Enable dark mode"
                icon={ <FiMoon size="20"/> }
                bg="gray.200"
              />
            )
          }
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;

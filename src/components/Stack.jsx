import { Box, Container, Flex, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiPython, SiPhp, SiDart, SiKotlin,
  SiNuxt, SiTailwindcss, SiFlutter, SiJetpackcompose,
  SiNodedotjs, SiNestjs, SiFastapi, SiBun,
  SiMysql, SiMongodb, SiPostgresql,
  SiClaude, SiCursor, SiLangchain, SiLanggraph, SiOllama,
  SiGit, SiGithub, SiDocker, SiVercel, SiFigma, SiPosthog,
  SiVivaldi, SiClickup, SiSpotify,
} from "react-icons/si";
import { RiReactjsFill, RiVuejsFill, RiAngularjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaAws, FaSlack } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

const MotionBox = motion.create(Box);

const dailyDrivers = [
  { name: "Node JS", link: "https://nodejs.org", icon: SiNodedotjs },
  { name: "React JS", link: "https://react.dev", icon: RiReactjsFill },
  { name: "Next JS", link: "https://nextjs.org", icon: TbBrandNextjs },
  { name: "Tailwind CSS", link: "https://tailwindcss.com", icon: SiTailwindcss },
  { name: "Vue JS", link: "https://vuejs.org", icon: RiVuejsFill },
  { name: "Nuxt JS", link: "https://nuxt.com", icon: SiNuxt },
  { name: "Angular", link: "https://angular.dev", icon: RiAngularjsFill },
  { name: "AWS", link: "https://aws.amazon.com", icon: FaAws },
  { name: "Docker", link: "https://www.docker.com", icon: SiDocker },
  { name: "MySQL", link: "https://www.mysql.com", icon: SiMysql },
  { name: "Git", link: "https://git-scm.com", icon: SiGit },
  { name: "Flutter", link: "https://flutter.dev", icon: SiFlutter },
];

const categories = [
  {
    label: "languages",
    items: [
      { name: "JavaScript", link: "https://developer.mozilla.org/docs/Web/JavaScript", icon: SiJavascript },
      { name: "TypeScript", link: "https://www.typescriptlang.org", icon: SiTypescript },
      { name: "Python", link: "https://www.python.org", icon: SiPython },
      { name: "PHP", link: "https://www.php.net", icon: SiPhp },
      { name: "Dart", link: "https://dart.dev", icon: SiDart },
      { name: "Kotlin", link: "https://kotlinlang.org", icon: SiKotlin },
    ],
  },
  {
    label: "frontend",
    items: [
      { name: "React", link: "https://react.dev", icon: RiReactjsFill },
      { name: "Next.js", link: "https://nextjs.org", icon: TbBrandNextjs },
      { name: "Vue", link: "https://vuejs.org", icon: RiVuejsFill },
      { name: "Nuxt.js", link: "https://nuxt.com", icon: SiNuxt },
      { name: "Angular", link: "https://angular.dev", icon: RiAngularjsFill },
      { name: "Tailwind CSS", link: "https://tailwindcss.com", icon: SiTailwindcss },
    ],
  },
  {
    label: "mobile",
    items: [
      { name: "Flutter", link: "https://flutter.dev", icon: SiFlutter },
      { name: "Jetpack Compose", link: "https://developer.android.com/compose", icon: SiJetpackcompose },
      { name: "Compose Multiplatform", link: "https://www.jetbrains.com/compose-multiplatform", icon: SiJetpackcompose },
    ],
  },
  {
    label: "backend",
    items: [
      { name: "Node.js", link: "https://nodejs.org", icon: SiNodedotjs },
      { name: "NestJS", link: "https://nestjs.com", icon: SiNestjs },
      { name: "FastAPI", link: "https://fastapi.tiangolo.com", icon: SiFastapi },
      { name: "Bun", link: "https://bun.sh", icon: SiBun },
    ],
  },
  {
    label: "databases",
    items: [
      { name: "MySQL", link: "https://www.mysql.com", icon: SiMysql },
      { name: "MongoDB", link: "https://www.mongodb.com", icon: SiMongodb },
      { name: "PostgreSQL", link: "https://www.postgresql.org", icon: SiPostgresql },
    ],
  },
  {
    label: "ai",
    items: [
      { name: "Claude Code", link: "https://claude.com/claude-code", icon: SiClaude },
      { name: "Codex", link: "https://openai.com/codex", icon: AiOutlineOpenAI },
      { name: "Cursor", link: "https://cursor.com", icon: SiCursor },
      { name: "LangChain", link: "https://www.langchain.com", icon: SiLangchain },
      { name: "LangGraph", link: "https://www.langchain.com/langgraph", icon: SiLanggraph },
      { name: "Ollama", link: "https://ollama.com", icon: SiOllama },
    ],
  },
  {
    label: "tools",
    items: [
      { name: "Git", link: "https://git-scm.com", icon: SiGit },
      { name: "GitHub", link: "https://github.com", icon: SiGithub },
      { name: "Docker", link: "https://www.docker.com", icon: SiDocker },
      { name: "AWS", link: "https://aws.amazon.com", icon: FaAws },
      { name: "Vercel", link: "https://vercel.com", icon: SiVercel },
      { name: "VS Code", link: "https://code.visualstudio.com", icon: VscVscode },
      { name: "Figma", link: "https://www.figma.com", icon: SiFigma },
      { name: "PostHog", link: "https://posthog.com", icon: SiPosthog },
    ],
  },
  {
    label: "productivity",
    items: [
      { name: "Vivaldi", link: "https://vivaldi.com", icon: SiVivaldi },
      { name: "Slack", link: "https://slack.com", icon: FaSlack },
      { name: "ClickUp", link: "https://clickup.com", icon: SiClickup },
      { name: "Spotify", link: "https://open.spotify.com", icon: SiSpotify },
    ],
  },
];

const Stack = () => {
  const { colorMode } = useColorMode();
  const isLight = colorMode === "light";

  return (
    <Container maxW="6xl" py={{ base: 12, md: 16 }}>
      <Text fontFamily="mono" fontSize="sm" color={isLight ? "gray.500" : "gray.400"}>
        $ tree ~/stack
      </Text>
      <Text fontSize={{ base: "1.7rem", md: "2.2rem" }} maxW="550" fontWeight="medium" mt="2">
        The stack I build with
      </Text>

      <VStack align="stretch" spacing={{ base: 10, md: 7 }} mt="16">
        {categories.map((category, index) => {
          const isLast = index === categories.length - 1;
          return (
            <MotionBox
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                align={{ base: "flex-start", md: "flex-start" }}
                gap={{ base: 3, md: 6 }}
              >
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  minW={{ md: "220px" }}
                  pt={{ md: 2 }}
                  color={isLight ? "gray.600" : "gray.400"}
                  whiteSpace="pre"
                >
                  {isLast ? "└── " : "├── "}
                  <Text as="span" fontWeight="bold" color={isLight ? "gray.800" : "gray.100"}>
                    {category.label}/
                  </Text>
                </Text>

                <Flex flexWrap="wrap" gap={3}>
                  {category.items.map((item) => (
                    <Flex
                      key={item.name}
                      as="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      align="center"
                      gap={2}
                      px={3}
                      py={2}
                      borderRadius="lg"
                      border="1px"
                      borderColor={isLight ? "gray.200" : "whiteAlpha.300"}
                      color={isLight ? "gray.700" : "gray.200"}
                      fontSize="sm"
                      transition="all 0.2s"
                      _hover={{
                        transform: "translateY(-2px)",
                        borderColor: isLight ? "gray.400" : "whiteAlpha.500",
                        shadow: "sm",
                      }}
                    >
                      <item.icon size="18" />
                      {item.name}
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </MotionBox>
          );
        })}
      </VStack>

      {/* Classic icon strip — the daily drivers, big and bold like the original section */}
      <MotionBox
        mt="24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Text fontFamily="mono" fontSize="sm" color={isLight ? "gray.500" : "gray.400"}>
          # daily drivers
        </Text>

        <SimpleGrid
          display={{ base: "grid", md: "none" }}
          columns={3}
          spacing="10"
          mt="10"
          textAlign="center"
        >
          {dailyDrivers.map((item) => (
            <Flex
              key={item.name}
              as="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              align="center"
              justify="center"
              opacity=".9"
              transform="scale(.9)"
            >
              <item.icon size="65" />
            </Flex>
          ))}
        </SimpleGrid>

        <VStack display={{ base: "none", md: "flex" }} spacing="10" align="stretch" mt="10">
          <Flex direction="row" justify="space-between" align="center">
            {dailyDrivers.slice(0, 6).map((item) => (
              <Flex
                key={item.name}
                as="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                opacity=".9"
                transition="all 0.2s"
                _hover={{ opacity: 1, transform: "translateY(-4px)" }}
              >
                <item.icon size="65" />
              </Flex>
            ))}
          </Flex>
          <Flex direction="row" justify="space-between" align="center">
            {dailyDrivers.slice(6, 12).map((item) => (
              <Flex
                key={item.name}
                as="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                opacity=".9"
                transition="all 0.2s"
                _hover={{ opacity: 1, transform: "translateY(-4px)" }}
              >
                <item.icon size="65" />
              </Flex>
            ))}
          </Flex>
        </VStack>
      </MotionBox>
    </Container>
  );
};

export default Stack;

import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack.jsx";
import Experience from "../components/Experience.jsx";
import CVCard from "../components/CVCard.jsx";
import SideNav from "../components/SideNav.jsx";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyegbile Praise</title>
      </Head>
      <Navbar />
      <SideNav />
      <Box id="home">
        <Header />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="experience">
        <Experience />
      </Box>
      <Box id="stack">
        <Stack />
      </Box>
      <Box id="resume">
        <CVCard />
      </Box>
      <Container maxW="6xl" as="footer" py="10">
        <Text fontSize="lg">
          &copy; Oyegbile Praise {new Date().getFullYear()}
        </Text>
      </Container>
    </>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies.jsx";
import CVCard from "../components/CVCard.jsx";
import { Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyegbile Praise</title>
      </Head>
      <Navbar />
      <Header />
      <Projects />
      <Technologies />
      <CVCard />
      <Container maxW="6xl" as="footer" py="10">
        <Text fontSize="lg">
          &copy; Oyegbile Praise {new Date().getFullYear()}
        </Text>
      </Container>
    </>
  );
}

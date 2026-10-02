import Seo from "../components/Seo.jsx";
import site, { absoluteUrl } from "../lib/seo";
import Header from "../components/Header";
import Projects from "../components/Projects";
import MobileApps from "../components/MobileApps.jsx";
import Navbar from "../components/Navbar";
import Stack from "../components/Stack.jsx";
import Experience from "../components/Experience.jsx";
import CVCard from "../components/CVCard.jsx";
import SideNav from "../components/SideNav.jsx";
import { Box, Container, Text } from "@chakra-ui/react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: site.name,
      url: site.url,
      image: absoluteUrl(site.image),
      jobTitle: "Full Stack & Mobile Developer",
      worksFor: { "@type": "Organization", name: "Statisense", url: "https://statisense.co" },
      address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
      knowsAbout: ["React", "Next.js", "Vue", "Flutter", "Node.js", "NestJS", "FastAPI", "TypeScript", "AI"],
      sameAs: site.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: site.name,
      url: site.url,
      publisher: { "@id": absoluteUrl("/#person") },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Seo jsonLd={jsonLd} />
      <Navbar />
      <SideNav />
      <Box id="home">
        <Header />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="apps">
        <MobileApps />
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

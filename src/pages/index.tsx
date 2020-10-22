import { Text } from "@chakra-ui/core";
import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import Navbar from "../components/Navbar";

const Index = () => (
  <>
    <Navbar />
    <Container>
      <Hero />
      <Main></Main>

      <Footer>
        <Text>2020 &copy;</Text>
      </Footer>
    </Container>
  </>
);

export default Index;

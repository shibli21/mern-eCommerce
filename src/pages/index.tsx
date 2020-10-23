import { Text } from "@chakra-ui/core";
import React from "react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import Products from "../components/Products";

const Index = () => (
  <>
    <Container>
      <Main>
        <Products />
      </Main>
      <Footer>
        <Text>2020 &copy;</Text>
      </Footer>
    </Container>
  </>
);

export default Index;

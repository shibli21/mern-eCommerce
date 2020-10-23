import { Heading } from "@chakra-ui/core";
import React from "react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

interface Props {}

const cart = (props: Props) => {
  return (
    <Container>
      <Main>
        <Heading>Cart</Heading>
      </Main>
    </Container>
  );
};

export default cart;

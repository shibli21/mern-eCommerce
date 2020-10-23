import { Heading } from "@chakra-ui/core";
import React from "react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";

interface Props {}

const signin = (props: Props) => {
  return (
    <Container>
      <Main>
        <Heading>Sign in </Heading>
      </Main>
    </Container>
  );
};

export default signin;

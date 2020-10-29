import { Box, Button, Flex } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "../components/Container";
import InputField from "../components/InputField";
import { Main } from "../components/Main";

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const router = useRouter();

  return (
    <Container>
      <Main minH="100vh">
        <Flex align="center" justify="center">
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {}}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box minW="400px">
                  <InputField name="username" placeholder="username" label="Username" />
                  <Box mt={4}>
                    <InputField name="email" placeholder="email" label="Email" />
                  </Box>
                  <Box mt={4}>
                    <InputField name="password" placeholder="password" label="Password" type="password" />
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting}>
                    Register
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Flex>
      </Main>
    </Container>
  );
};

export default Register;

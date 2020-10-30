import { Box, Button, Flex, Text } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { Container } from "../components/Container";
import InputField from "../components/InputField";
import { Main } from "../components/Main";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
interface RegisterProps {}

const register = ({ name, email, password }: any) => {
  return axios.post(
    "http://localhost:5000/api/users",
    {
      email,
      password,
      name,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

const Register = (props: RegisterProps) => {
  const router = useRouter();
  const [, setUserInfo] = useLocalStorage("userInfo", null);
  const [mutate] = useMutation(register, {
    onSuccess: (data) => {
      setUserInfo(data.data);
      router.push("/");
    },
  });

  return (
    <Container>
      <Main minH="100vh">
        <Flex align="center" justify="center">
          <Box minW="400px">
            <Text fontSize="3xl" letterSpacing={1.5} fontWeight="semibold" mb={4}>
              REGISTER
            </Text>
            <Formik
              initialValues={{ email: "", username: "", password: "" }}
              onSubmit={async (values) => {
                console.log(values);
                await mutate({ name: values.username, email: values.email, password: values.password });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField name="username" placeholder="username" label="Username" />
                  <Box mt={4}>
                    <InputField name="email" placeholder="email" label="Email" />
                  </Box>
                  <Box mt={4}>
                    <InputField name="password" placeholder="password" label="Password" type="password" />
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting} borderRadius={0}>
                    Register
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Main>
    </Container>
  );
};

export default Register;

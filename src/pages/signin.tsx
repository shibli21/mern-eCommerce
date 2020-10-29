import { Box, Button, Flex } from "@chakra-ui/core";
import axios from "axios";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import { queryCache, useMutation } from "react-query";
import { Container } from "../components/Container";
import InputField from "../components/InputField";
import { Main } from "../components/Main";

const login = ({ email, password }: any) => {
  return axios.post(
    "http://localhost:5000/api/users/login",
    {
      email,
      password,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
};

interface Props {}

const signin = (props: Props) => {
  const [mutate, { data }] = useMutation(login, {
    onSuccess: (data) => {
      queryCache.setQueryData(["login"], data);
      localStorage.setItem("userInfo", JSON.stringify(data.data));
    },
  });

  const loginData = queryCache.getQueryData("login");

  console.log(`loginData`, loginData);

  return (
    <Container>
      <Main minH="100vh">
        <Flex align="center" justify="center">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              console.log(values);
              await mutate({ email: values.email, password: values.password });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Box minW="400px">
                  <InputField name="email" placeholder="email" label="Email" />
                  <Box mt={4}>
                    <InputField name="password" placeholder="password" label="Password" />
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="blue">
                    Login
                  </Button>
                  <Button mt={4} ml={4} type="button" colorScheme="teal">
                    <NextLink href="/register">Register</NextLink>
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

export default signin;

import { Box, Button, Flex, Text } from "@chakra-ui/core";
import axios from "axios";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { Container } from "../components/Container";
import InputField from "../components/InputField";
import { Main } from "../components/Main";
import useLocalStorage from "../hooks/useLocalStorage";

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

const SignIn = (props: Props) => {
  const [, setUserInfo] = useLocalStorage("userInfo", null);
  const router = useRouter();

  const [mutate] = useMutation(login, {
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
              SIGN IN
            </Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={async (values) => {
                console.log(values);
                await mutate({ email: values.email, password: values.password });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <InputField name="email" placeholder="Enter email" label="Email" />
                  <Box mt={4}>
                    <InputField name="password" placeholder="Enter password" label="Password" />
                  </Box>
                  <Button mt={4} type="submit" isLoading={isSubmitting} colorScheme="blue" borderRadius={0}>
                    Login
                  </Button>
                  <Button mt={4} ml={4} type="button" colorScheme="teal" borderRadius={0}>
                    <NextLink href="/register">Register</NextLink>
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

export default SignIn;

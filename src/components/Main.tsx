import { Stack, StackProps } from "@chakra-ui/core";

export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="1440px"
    pt="4rem"
    px="1rem"
    {...props}
  />
);

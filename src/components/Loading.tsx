import { Flex, Spinner, SpinnerProps } from "@chakra-ui/core";
import React from "react";

const Loading = (props: SpinnerProps) => {
  return (
    <Flex w="100%" h="100%" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        {...props}
      />
    </Flex>
  );
};

export default Loading;

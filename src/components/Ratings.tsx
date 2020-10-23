import { Box, Flex, Text } from "@chakra-ui/core";
import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingsProps {
  value: number;
  numReviews: number;
}

const Ratings: React.FC<RatingsProps> = ({ value, numReviews }) => {
  return (
    <>
      <Flex alignItems="center" my={2}>
        <Box
          color="orange.500"
          as={value >= 1 ? FaStar : value >= 0.5 ? FaStarHalfAlt : FaRegStar}
        />
        <Box
          color="orange.500"
          as={value >= 2 ? FaStar : value >= 1.5 ? FaStarHalfAlt : FaRegStar}
        />
        <Box
          color="orange.500"
          as={value >= 3 ? FaStar : value >= 2.5 ? FaStarHalfAlt : FaRegStar}
        />
        <Box
          color="orange.500"
          as={value >= 4 ? FaStar : value >= 3.5 ? FaStarHalfAlt : FaRegStar}
        />
        <Box
          color="orange.500"
          as={value >= 5 ? FaStar : value >= 4.5 ? FaStarHalfAlt : FaRegStar}
        />
        <Text ml={2} fontWeight="semibold">
          {numReviews} reviews
        </Text>
      </Flex>
    </>
  );
};

export default Ratings;

import {
  Badge,
  Text,
  Image,
  Box,
  Flex,
  Heading,
  ChakraProps,
  Grid,
} from "@chakra-ui/core";
import React from "react";
import products from "../../products";

const Products = (props: ChakraProps) => {
  return (
    <>
      <Heading textTransform="uppercase" letterSpacing={1.5}>
        Latest Products
      </Heading>
      <Grid
        gridTemplateColumns={[
          "1fr ",
          "1fr 1fr ",
          "1fr 1fr 1fr ",
          "1fr 1fr 1fr 1fr",
        ]}
        gridGap={10}
      >
        {products.map((product) => (
          <Box
            key={product._id}
            p={4}
            rounded="md"
            border="1px solid #999"
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Image rounded="md" src={product.image} />
            <Text mt={2} fontSize="lg" fontWeight="semibold" lineHeight="short">
              {product.name}
            </Text>
            <Flex mt={2} align="center">
              <Text ml={1} fontSize="sm">
                <b>4.84</b> (190)
              </Text>
            </Flex>
            <Text
              mt={2}
              fontSize="2xl"
              fontWeight="semibold"
              lineHeight="short"
              letterSpacing={1.4}
            >
              ${product.price}
            </Text>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Products;

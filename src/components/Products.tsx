import NextLink from "next/link";
import {
  Box,
  ChakraProps,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/core";
import React from "react";
import products from "../../products";
import { MdStar } from "react-icons/md";
import Ratings from "./Ratings";

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
            <Image rounded="md" mb={2} src={product.image} />
            <NextLink href="/product/[id]" as={`/product/${product._id}`}>
              <Link fontSize="lg" fontWeight="semibold" lineHeight="short">
                {product.name}
              </Link>
            </NextLink>
            <Ratings value={product.rating} numReviews={product.numReviews} />
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

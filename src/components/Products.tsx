import { Box, Grid, Heading, Image, Link, Text } from "@chakra-ui/core";
import axios from "axios";
import NextLink from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { Product } from "../types/products";
import Loading from "./Loading";
import Ratings from "./Ratings";

const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:5000/api/products");
  return data;
};

const Products = () => {
  const { isLoading, error, data, isError } = useQuery<Product[], Error>(
    "products",
    fetchProducts
  );

  if (isLoading) return <Loading />;

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

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
        {data?.map((product) => (
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

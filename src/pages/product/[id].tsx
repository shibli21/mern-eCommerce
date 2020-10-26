import { Box, Button, Divider, Grid, Image, Text } from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useQuery } from "react-query";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import { Main } from "../../components/Main";
import Ratings from "../../components/Ratings";
import { Product as SingleProduct } from "../../types/products";

const Product = () => {
  const router = useRouter();
  const { isLoading, error, data: product, isError } = useQuery<
    SingleProduct,
    Error
  >(
    "product",
    async () =>
      await fetch(
        `http://localhost:5000/api/products/${router.query.id}`
      ).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Container>
      <Main minH="90vh" mb={4}>
        <Grid gridTemplateColumns={["1fr", "6fr 3fr 3fr"]} gap={6}>
          <Box w="100%">
            <Image
              rounded="md"
              mb={2}
              src={product?.image}
              w="100%"
              objectFit="cover"
            />
          </Box>
          <Box w="100%">
            <Text
              p={4}
              fontSize="3xl"
              letterSpacing={1.5}
              textTransform="uppercase"
            >
              {product?.name}
            </Text>
            <Divider />
            <Box px={4} py={2}>
              <Ratings
                value={product!.rating}
                numReviews={product!.numReviews}
              />
            </Box>
            <Divider />
            <Text p={4} letterSpacing={1.5} fontWeight="semibold">
              Price : ${product?.price}
            </Text>
            <Divider />
            <Text p={4} letterSpacing={1.5}>
              Description : {product?.description}
            </Text>
          </Box>
          <Box w="100%">
            <Box border="1px solid #444">
              <Text p={4} letterSpacing={1.5} fontWeight="semibold">
                Price : ${product?.price}
              </Text>
              <Divider color="#444" />
              <Text p={4} letterSpacing={1.5} fontWeight="semibold">
                Status : {product?.countInStock ? "In Stock" : "Stock out"}
              </Text>
              <Divider color="#444" />
              <Box p={4}>
                <Button w="100%" colorScheme="green" textTransform="uppercase">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Main>
    </Container>
  );
};

export default Product;

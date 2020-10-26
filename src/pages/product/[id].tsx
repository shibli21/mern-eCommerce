import { Box, Button, Divider, Flex, FormControl, FormLabel, Grid, Image, Select, Text } from "@chakra-ui/core";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { Container } from "../../components/Container";
import Loading from "../../components/Loading";
import { Main } from "../../components/Main";
import Ratings from "../../components/Ratings";
import { Product as SingleProduct } from "../../types/products";

const fetchProduct = async (key, id) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  return data;
};

const Product = () => {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const { isLoading, error, data: product, isError } = useQuery<SingleProduct, Error>(
    ["product", router.query.id],
    fetchProduct
  );

  if (isLoading) return <Loading />;

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!product) {
    return <Box>NO PRODUCT</Box>;
  }

  return (
    <Container>
      <Main minH="90vh" mb={4}>
        <Flex align="center" onClick={() => router.back()} cursor="pointer">
          <Box as={FaArrowLeft} size="20px" />
          <Text ml={2} fontSize="lg" fontWeight="semibold">
            Go back
          </Text>
        </Flex>
        <Grid gridTemplateColumns={["1fr", "6fr 3fr 3fr"]} gap={6}>
          <Box w="100%">
            <Image rounded="md" mb={2} src={product?.image} w="100%" objectFit="cover" />
          </Box>
          <Box w="100%">
            <Text p={4} fontSize="3xl" letterSpacing={1.5} textTransform="uppercase">
              {product?.name}
            </Text>
            <Divider />
            <Box px={4} py={2}>
              <Ratings value={product.rating} numReviews={product.numReviews} />
            </Box>
            <Divider />
            <Text p={4} letterSpacing={1.5} fontWeight="semibold">
              Price : ${product.price}
            </Text>
            <Divider />
            <Text p={4} letterSpacing={1.5}>
              Description : {product.description}
            </Text>
          </Box>
          <Box w="100%">
            <Box border="1px solid #444">
              <Text p={4} letterSpacing={1.5} fontWeight="semibold">
                Price : ${product.price}
              </Text>
              <Divider color="#444" />
              <Text p={4} letterSpacing={1.5} fontWeight="semibold">
                Status : {product.countInStock > 0 ? "In Stock" : "Stock out"}
              </Text>
              <Divider color="#444" />

              {product.countInStock > 0 && (
                <>
                  <FormControl py={2} px={4} letterSpacing={1.5} fontWeight="semibold">
                    <Flex align="center">
                      <FormLabel htmlFor="country">Country</FormLabel>
                      <Select
                        id="qty"
                        onChange={(e) => {
                          setQty(parseInt(e.target.value));
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Select>
                    </Flex>
                  </FormControl>
                  <Divider color="#444" />
                </>
              )}

              <Box p={4}>
                <Button
                  w="100%"
                  colorScheme="green"
                  textTransform="uppercase"
                  onClick={() => router.push(`/cart/?${router.query.id}?qty=${qty}`)}
                >
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

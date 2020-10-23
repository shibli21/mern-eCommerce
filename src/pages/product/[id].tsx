import {
  Box,
  Button,
  ChakraProps,
  Divider,
  Grid,
  Image,
  Text,
} from "@chakra-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import products from "../../../products";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import Ratings from "../../components/Ratings";

interface Props extends ChakraProps {}

const Product = (props: Props) => {
  const router = useRouter();
  const product = products.find((p) => p._id === router.query.id);
  if (!product) {
    return <Box>no product</Box>;
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
                value={product?.rating}
                numReviews={product?.numReviews}
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

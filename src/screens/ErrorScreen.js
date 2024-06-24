import { Flex, Grid, Heading, Image, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import FilledButton from "../components/FilledButton";

const ErrorScreen = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
      gap={{ base: "5", md: "0" }}
      justifyContent="center"
      alignItems="center"
      my={{ base: "5", md: "10" }}
    >
      <Image
        src="../assets/404.svg"
        display={{ base: "block", md: "none" }}
        boxSize="200px"
        margin="auto"
      />
      <Flex mx="10" direction="column" gap="5">
        <Heading fontSize={{ base: "2rem", md: "2.5rem", lg: "3rem" }}>
          <span style={{ color: "#D90000" }}> Sorry</span>, Page Not Found
        </Heading>
        <Text>
          This might be because you have typed the web address incorrectly, or
          the page you were looking for may have been moved, updated or deleted.
          Please use one of the links below.
        </Text>
        <Link
          as={RouterLink}
          to="/"
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "auto" });
          }}
        >
          <FilledButton
            label="GO TO HOMEPAGE"
            size={{ base: "xs", md: "md" }}
            ht={{ base: "35px", md: "40px" }}
          />
        </Link>
      </Flex>
      <Image
        src="../assets/404.svg"
        display={{ base: "none", md: "block" }}
        boxSize={{ md: "300px", lg: "350px" }}
      />
    </Grid>
  );
};

export default ErrorScreen;

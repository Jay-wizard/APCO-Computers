import { Grid, Stack, Text, Image, Box, Heading } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactForm";
import ContactGrid from "../components/ContactGrid";
import Map from "../components/Map";
import { Helmet } from "react-helmet-async";

const ContactScreen = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Contact - APCO Computers</title>
        <meta
          name="description"
          content="Contact APCO Computers for any inquiries or assistance. Reach out to us for the best service and support. We're here to help!"
        />
        <link rel="canonical" href="https://www.apcocomputers.com/contact" />
      </Helmet>
      {/* Banner */}
      <Box
        bgImage="url('../assets/contact.jpg')"
        bgPosition={{ base: "right", md: "center" }}
        backgroundSize="cover"
        w="full"
        h={{ base: "200px", md: "200px", lg: "300px" }}
        display="flex"
        alignItems="center"
      >
        <Heading
          as="h1"
          size={{ base: "md", md: "xl", lg: "2xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
          mx={{ base: "7", md: "40" }}
          mt={{ base: "3.5rem", md: "0" }}
        >
          CONTACT <span style={{ color: "#D90000" }}> US </span>
        </Heading>
      </Box>

      {/* Form Section */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "1fr 2fr" }}
        my={10}
        px={{ base: "10", md: "10", lg: "20" }}
        py={5}
        gap={5}
        justifyContent="space-between"
        w="full"
        bgColor="#f8f8f8"
      >
        <Stack my={5} spacing={5} w={{ base: "xs", md: "xs", lg: "md" }}>
          <Text
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
          >
            Get in <span style={{ color: "#D90000" }}> Touch </span>
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Are you looking for the best service? Reach out to us with any
            queries!
          </Text>
          <Image
            src="/assets/contact.svg"
            alt="Contact Apco"
            display={{ base: "none", md: "block" }}
          />
        </Stack>
        <ContactForm />
      </Grid>

      {/* Contact Section */}
      <ContactGrid />

      {/* Map */}
      <Map />
    </>
  );
};

export default ContactScreen;

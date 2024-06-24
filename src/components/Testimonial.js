import { Avatar, Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Testimonial = ({ review }) => {
  return (
    <Flex
      position="relative"
      direction="column"
      gap={10}
      p={{ base: "10", md: "4em" }}
      // bgColor="#f8f8f8"
      borderRadius="xl"
      boxShadow="rgba(50, 50, 93, 0.2) 0px 20px 40px -8px inset, rgba(0, 0, 0, 0.3) 0px 15px 30px -15px inset, rgba(50, 50, 93, 0.2) 0px -20px 40px -8px inset, rgba(0, 0, 0, 0.3) 0px -15px 30px -15px inset;"
      mx={{ base: "5", md: "20" }}
      my={10}
    >
      <Image
        src="../assets/quote.png"
        boxSize={{ base: "30px", md: "50px" }}
        position="absolute"
        top={{ base: "8", md: "5" }}
        right="5"
      />
      <Stack spacing={5} w={{ base: "100%", md: "100%", lg: "80%" }}>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          color="#D90000"
        >
          {review.title}
        </Text>
        <Text color="#696969" fontSize={{ base: "sm", md: "md" }}>
          {review.message}
        </Text>
      </Stack>
      <Flex>
        <Avatar src={review.image} />
        <Box ml="3">
          <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
            {review.name}
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color="#696969">
            {review.course}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Testimonial;

import React from "react";
import {
  Flex,
  Text,
  Box,
  Heading,
  Stack,
  Image,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";

const Success = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      my={10}
      bgPosition="center"
      backgroundSize="100% 100%"
      w="full"
      h={{ base: "200px", md: "300px", lg: "380px" }}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(240,242,240,0.2)), url('../assets/success.jpg')`,
      }}
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        w="full"
        position="relative"
        bottom="-45%"
      >
        <Flex h="240px">
          <Card
            bgColor="rgba(57, 77, 110, 0.9)"
            color="white"
            maxW="2xs"
            borderRadius="20px 0 0 20px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          >
            <CardHeader m="auto">
              <Image
                boxSize={{ base: "40px", md: "50px", lg: "60px" }}
                src="../assets/success/course.png"
              />
            </CardHeader>
            <CardBody>
              <Stack
                spacing={{ base: "2", md: "3", lg: "5" }}
                textAlign="center"
              >
                <Heading size="sm"> SELECT A COURSE! </Heading>
                <Text fontSize="sm">
                  Explore our diverse courses. Find the perfect fit for your
                  interests and skill level.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Flex>

        <Flex h="300px">
          <Card
            bgColor="rgba(236, 174, 27, 0.9)"
            color="white"
            maxW="xs"
            py={8}
            borderRadius="20"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          >
            <CardHeader m="auto">
              <Image
                boxSize={{ base: "40px", md: "50px", lg: "60px" }}
                src="../assets/success/goal.png"
              />
            </CardHeader>
            <CardBody>
              <Stack
                spacing={{ base: "2", md: "3", lg: "5" }}
                textAlign="center"
              >
                <Heading size="sm"> SET ACHIEVABLE GOALS </Heading>
                <Text fontSize="sm">
                  Define clear, attainable goals. Take the first steps towards
                  realizing your dreams.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Flex>

        <Flex h="240px">
          <Card
            bgColor="rgba(57, 77, 110, 0.9)"
            color="white"
            maxW="2xs"
            borderRadius="0 20px 20px 0"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          >
            <CardHeader m="auto">
              <Image
                boxSize={{ base: "40px", md: "50px", lg: "60px" }}
                src="../assets/success/future.png"
              />
            </CardHeader>
            <CardBody>
              <Stack
                spacing={{ base: "2", md: "3", lg: "5" }}
                textAlign="center"
              >
                <Heading size="sm"> BUILD YOUR FUTURE </Heading>
                <Text fontSize="sm">
                  Invest in yourself today. Start shaping a brighter future now.
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Success;

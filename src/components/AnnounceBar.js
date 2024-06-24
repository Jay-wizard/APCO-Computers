import {
  Flex,
  Icon,
  Link,
  Text,
  Center,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const AnnounceBar = () => {
  return (
    <Flex
      justifyContent="center"
      alignContent="center"
      bgGradient="linear(to-r, rgb(125,20,29), rgb(255,30,39))"
      color="whiteAlpha.900"
      padding="3"
      display={{ base: "none", md: "flex" }}
    >
      <Flex
        justifyContent="space-between"
        w="full"
        mx={{ base: "10", md: "20" }}
        fontWeight="semibold"
      >
        <Flex alignItems="center" gap={3}>
          <Image src="../assets/logo_mkcl.svg" boxSize="25px" />
          <Text fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
            MKCL Authorized Learning Center (78210181)
          </Text>
        </Flex>
        <Flex gap={5} alignItems="center">
          <Link
            as={RouterLink}
            to="tel:+91 9220382038"
            fontSize={{ base: "xs", md: "xs", lg: "sm" }}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={FaPhone} mr="2" boxSize={4} />
            +91 9220382038
          </Link>
          <Center height="20px">
            <Divider orientation="vertical" />
          </Center>
          <Link
            as={RouterLink}
            to="https://maps.app.goo.gl/J1S3os8tPEYb6Q888"
            target="_blank"
            fontSize={{ base: "xs", md: "xs", lg: "sm" }}
            display="flex"
            alignItems="center"
            _hover={{ textDecoration: "none" }}
          >
            <Icon as={FaLocationDot} mr="2" boxSize={4} />
            Ambivali (W)
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AnnounceBar;

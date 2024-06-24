import { Grid, Flex, Image, Stack, Text, Link } from "@chakra-ui/react";

const ContactGrid = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        w="fit-content"
        margin="auto"
        gap={10}
        py={10}
        letterSpacing="widest"
      >
        {/* Location */}
        <Flex
          direction="column"
          alignItems="center"
          gap={5}
          w={{ base: "2xs", md: "3xs", lg: "xs" }}
        >
          <Image
            src="../assets/location.svg"
            boxSize={{ base: "80px", md: "80px", lg: "100px" }}
          />
          <Stack textAlign="center" spacing={5}>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              ADDRESS
            </Text>
            <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              Shop No. 3 & 4, Opp. Ambivali Railway Station, Ambivali West,
              Kalyan - 421102.
            </Text>
          </Stack>
        </Flex>
        {/* Call */}

        <Flex
          direction="column"
          alignItems="center"
          gap={5}
          w={{ base: "2xs", md: "3xs", lg: "xs" }}
          borderLeft={{ base: "none", md: "1px solid lightgray" }}
          borderRight={{ base: "none", md: "1px solid lightgray" }}
          borderTop={{ base: "1px solid lightgray", md: "none" }}
          borderBottom={{
            base: "1px solid lightgray",
            md: "none",
          }}
          pb={{ base: "5", md: "0" }}
        >
          <Image
            src="../assets/call.svg"
            boxSize={{ base: "80px", md: "80px", lg: "100px" }}
          />
          <Stack textAlign="center" spacing={5}>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              PHONE
            </Text>
            <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              <Link
                _hover={{ textDecor: "none", color: "#D90000" }}
                href="tel:+91 9220382038"
              >
                +91 9220382038
              </Link>
              <br />
              <Link
                _hover={{ textDecor: "none", color: "#D90000" }}
                href="tel:+91 7021661810"
              >
                +91 7021661810
              </Link>
            </Text>
          </Stack>
        </Flex>
        {/* Mail */}
        <Flex
          direction="column"
          alignItems="center"
          gap={5}
          w={{ base: "2xs", md: "3xs", lg: "xs" }}
        >
          <Image
            src="../assets/mail.svg"
            boxSize={{ base: "80px", md: "80px", lg: "100px" }}
          />
          <Stack textAlign="center" spacing={5}>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              MAIL
            </Text>
            <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              <Link
                _hover={{ textDecor: "none", color: "#D90000" }}
                href="mailto:info@apcocomputers.com"
              >
                info@apcocomputers.com
              </Link>
              <br />
              <Link
                _hover={{ textDecor: "none", color: "#D90000" }}
                href="mailto:apcocomputers@gmail.com"
              >
                apcocomputers@gmail.com
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Grid>
    </>
  );
};

export default ContactGrid;

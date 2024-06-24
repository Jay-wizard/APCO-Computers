import {
  Box,
  Heading,
  Flex,
  Grid,
  Stack,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import FilledButton from "../components/FilledButton";
import OutlineButton from "../components/OutlineButton";
import { Helmet } from "react-helmet-async";

const AboutScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>About - Apco Computers</title>
        <meta
          name="description"
          content="Discover Apco Computers' 20+ years of tech education expertise. Learn about our mission, vision, and values. Empowering your tech journey with practical skills."
        />
        <link rel="canonical" href="https://www.apcocomputers.com/about" />
      </Helmet>
      {/* Banner */}
      <Box
        bgImage="url('../assets/about.jpg')"
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
          mx={{ base: "5", md: "20" }}
          pb={20}
        >
          ABOUT<span style={{ color: "#D90000" }}> US</span>
        </Heading>
      </Box>

      {/* About Section */}
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 2fr" }}
        px={{ base: "10", md: "10", lg: "40" }}
        gap={{ base: "10", md: "10", lg: "20" }}
        my={20}
        alignItems="center"
      >
        <Image
          src="./assets/about2.jpg"
          alt="sucess"
          boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
        />
        <Stack lineHeight={{ base: "1.5em", md: "1.8em" }} spacing={5}>
          <Heading
            as="h1"
            size={{ base: "md", md: "lg", lg: "lg" }}
            fontWeight="semibold"
            fontFamily="Poppins,serif"
            textAlign="center"
          >
            About <span style={{ color: "#D90000" }}>APCO Computers</span>
          </Heading>
          <Text textAlign="justify" fontSize={{ base: "sm", md: "md" }}>
            Welcome to Apco Computers, where we help you dive into the world of
            technology with ease. With over 20 years of experience, we're all
            about making tech education accessible and practical. Our goal? To
            empower you to succeed in the tech industry by giving you the skills
            and confidence you need.
            <br /> <br />
            Apco Computers stands out with its experienced instructors,
            customizable class timings, hands-on learning approach, and career
            guidance. Our modern facilities ensure a conducive learning
            atmosphere.
          </Text>
        </Stack>
      </Grid>

      {/* Stats Section */}
      <Flex
        bgImage="url('../assets/stats.jpg')"
        bgPosition="center"
        backgroundSize="cover"
        w={{ base: "100%", md: "90%", lg: "85%" }}
        h={{ base: "200px", md: "200px", lg: "250px" }}
        alignItems="center"
        justifyContent="center"
        margin="auto"
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          textAlign="center"
          gap={{ base: "5", md: "5", lg: "10" }}
          px={{ base: "5", md: "0" }}
        >
          {/* 1st Grid */}
          <Stack
            p={{ base: "3", md: "5", lg: "7" }}
            backgroundColor="rgba(255, 255, 255, 0.3)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px;"
          >
            <Heading
              as="h2"
              size={{ base: "lg", md: "lg", lg: "2xl" }}
              fontWeight="semibold"
              fontFamily="Poppins,serif"
            >
              21+
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              Years of Experience
            </Text>
          </Stack>

          {/* 2nd Grid */}
          <Stack
            p={{ base: "3", md: "5", lg: "7" }}
            backgroundColor="rgba(255, 255, 255, 0.3)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px;"
          >
            <Heading
              as="h2"
              size={{ base: "lg", md: "lg", lg: "2xl" }}
              fontWeight="semibold"
              fontFamily="Poppins,serif"
            >
              5000+
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              Students
            </Text>
          </Stack>

          {/* 3rd Grid */}
          <Stack
            p={{ base: "3", md: "5", lg: "7" }}
            backgroundColor="rgba(255, 255, 255, 0.3)"
            backdropFilter="blur(10px)"
            borderRadius="lg"
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px;"
          >
            <Heading
              as="h2"
              size={{ base: "lg", md: "lg", lg: "2xl" }}
              fontWeight="semibold"
              fontFamily="Poppins,serif"
            >
              50+
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              Courses
            </Text>
          </Stack>
        </Grid>
      </Flex>

      {/* About Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        w="fit-content"
        margin="auto"
        gap={10}
        px={{ base: "10", md: "10", lg: "20" }}
        mt={20}
      >
        {/* Mission */}
        <Flex direction="column" alignItems="center" gap={5}>
          <Image
            src="../assets/success/mission.png"
            boxSize="60px"
            filter="drop-shadow(1px 1px 1px cyan)"
          />
          <Stack spacing={5}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="widest"
            >
              OUR MISSION
            </Text>
            <Text textAlign="justify" fontSize="sm">
              Our mission is to inspire, educate, and support individuals in the
              tech industry journey. We offer high-quality, hands-on training
              programs tailored to diverse learning styles, equipping students
              with the skills and confidence to thrive in a rapidly evolving
              digital world.
            </Text>
          </Stack>
        </Flex>

        {/* Vision */}
        <Flex direction="column" alignItems="center" gap={5}>
          <Image
            src="../assets/success/vision.png"
            boxSize="60px"
            filter="drop-shadow(1px 1px 1px cyan)"
          />
          <Stack spacing={5}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="widest"
            >
              OUR VISION
            </Text>
            <Text textAlign="justify" fontSize="sm">
              Our vision at Apco Computers is to be the leading provider of
              accessible and practical technology education, empowering
              individuals to thrive in the digital age and shape a brighter
              future for themselves and their communities.
            </Text>
          </Stack>
        </Flex>
        {/* Values */}
        <Flex direction="column" alignItems="center" gap={5}>
          <Image
            src="../assets/success/values.png"
            boxSize="60px"
            filter="drop-shadow(1px 1px 1px cyan)"
          />
          <Stack spacing={5}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="semibold"
              textAlign="center"
              letterSpacing="widest"
            >
              VALUES
            </Text>
            <Text textAlign="justify" fontSize="sm">
              At Apco Computers, we value excellence, accessibility,
              empowerment, innovation, and community. We are dedicated to
              providing high-quality education, ensuring accessibility for all,
              empowering individuals to succeed, fostering innovation, and
              building a supportive learning community.
            </Text>
          </Stack>
        </Flex>
      </Grid>

      {/* Join us */}
      <Flex justifyContent="center" my={10}>
        <FilledButton
          label="JOIN US TODAY"
          onClick={onOpen}
          size={{ base: "xs", md: "md" }}
          ht={{ base: "35px", md: "40px" }}
        />
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={{ base: "xs", md: "xl" }}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={10}>
              <Grid templateColumns="1fr 1fr" gap={20} textAlign="center">
                <Stack spacing={5}>
                  <Image src="../assets/teacher.svg" />
                  <OutlineButton
                    label="TEACHER"
                    url="/careers"
                    size={{ base: "xs", md: "md" }}
                    ht={{ base: "35px", md: "40px" }}
                  />
                </Stack>
                <Stack spacing={5}>
                  <Image src="../assets/student.svg" />
                  <OutlineButton
                    label="STUDENT"
                    url="/contact"
                    size={{ base: "xs", md: "md" }}
                    ht={{ base: "35px", md: "40px" }}
                  />
                </Stack>
              </Grid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default AboutScreen;

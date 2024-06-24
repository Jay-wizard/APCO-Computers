import React from "react";
import {
  Grid,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import FilledButton from "../components/FilledButton";
import { Helmet } from "react-helmet-async";

const CareerScreen = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Careers - Join APCO Computers</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at APCO Computers. Join us as an instructor and contribute to shaping the future of tech education. Apply now and be part of our team!"
        />
        <link rel="canonical" href="https://www.apcocomputers.com/careers" />
      </Helmet>

      {/* Banner */}
      <Box
        bgImage="url('../assets/careers.jpg')"
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
          mx={{ base: "10", md: "60" }}
        >
          CAREERS
        </Heading>
      </Box>

      {/* Careers */}
      <Heading
        as="h2"
        size={{ base: "md", md: "lg" }}
        fontWeight="semibold"
        fontFamily="Poppins,serif"
        textAlign="center"
        my={10}
      >
        CURRENT <span style={{ color: "#D90000" }}> OPENINGS</span>
      </Heading>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: "10", md: "20" }}
        mx={{ base: "10", md: "20" }}
      >
        {/* 1st Opening */}
        <Box>
          <Heading
            as="h2"
            size={{ base: "sm", md: "md" }}
            mb={4}
            fontWeight="semibold"
            fontFamily="Poppins,serif"
          >
            Basic Computer Instructor
          </Heading>
          <Flex direction="column" mb={4} gap={1} fontSize="sm">
            <Text>
              <strong>Experience:</strong> 06 months - 4 years (Teaching)
            </Text>
            <Text>
              <strong>Qualification:</strong> HSC / Graduation
            </Text>
            <Text>
              <strong>Job Timing:</strong> 8am to 2pm & 5pm to 9pm
            </Text>
          </Flex>
          <Flex direction="column" gap={3}>
            <Heading as="h3" size="sm" mb={2}>
              Roles & Responsibilities
            </Heading>
            <List
              spacing={2}
              fontSize="sm"
              textAlign={{ base: "left", md: "justify" }}
            >
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Conducting classes for basic computer courses following provided
                instructional materials.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Organizing and managing class/lab systems to ensure proper
                functionality.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Delivering lectures according to the daily syllabus plan.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assessing and evaluating student progress in a timely manner.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Troubleshooting technology services for both students and staff.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Collaborating with lead Faculty and instructional coaches to
                enhance teaching methods.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Ensuring on-time completion of course batches.
              </ListItem>
            </List>
            <FilledButton
              label="APPLY NOW"
              url="mailto:info@apcocomputers.com"
              size={{ base: "xs", md: "md" }}
              ht={{ base: "35px", md: "40px" }}
            />
          </Flex>
        </Box>

        {/* 2nd Opening */}
        <Box>
          <Heading
            as="h2"
            size={{ base: "sm", md: "md" }}
            mb={4}
            fontWeight="semibold"
            fontFamily="Poppins,serif"
          >
            Adv. Excel & Tally Instructor
          </Heading>
          <Flex direction="column" mb={4} gap={1} fontSize="sm">
            <Text>
              <strong>Experience:</strong> 1year - 4 years (Teaching)
            </Text>
            <Text>
              <strong>Qualification:</strong> HSC / B.Com
            </Text>
            <Text>
              <strong>Job Timing:</strong> 8am to 2pm & 5pm to 9pm
            </Text>
          </Flex>
          <Flex direction="column" gap={3}>
            <Heading as="h3" size="sm" mb={2}>
              Roles & Responsibilities
            </Heading>
            <List
              spacing={2}
              fontSize="sm"
              textAlign={{ base: "left", md: "justify" }}
            >
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Designing and delivering comprehensive lessons on advanced Excel
                and Tally topics.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Providing hands-on training to students to enhance their
                practical skills.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Developing instructional materials and resources to support the
                learning process.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assessing student progress through regular evaluations and
                assignments.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Improving teaching methods and curriculum collaboratively.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Maintaining accurate records of student attendance, grades, and
                performance.
              </ListItem>
            </List>
            <FilledButton
              label="APPLY NOW"
              url="mailto:info@apcocomputers.com"
              size={{ base: "xs", md: "md" }}
              ht={{ base: "35px", md: "40px" }}
            />
          </Flex>
        </Box>
      </Grid>
      <Text
        textAlign="center"
        mt={10}
        mx={{ base: "5", md: "10" }}
        fontSize={{ base: "sm", md: "md" }}
      >
        Interested candidates are encouraged to send their resumes to{" "}
        <Link
          href="mailto:info@apcocomputers.com"
          textDecoration="underline"
          color="#d90000"
        >
          info@apcocomputers.com
        </Link>{" "}
        to apply for the position.
      </Text>

      {/* Work at APCO */}
      <Flex
        direction="column"
        mt={{ base: "10", md: "20" }}
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Heading
          as="h1"
          size={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
        >
          Working at <span style={{ color: "#D90000" }}>APCO Computers</span>
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 2fr" }}
          px={{ base: "5", md: "10", lg: "40" }}
          gap={{ base: "10", md: "10", lg: "20" }}
          mt={5}
        >
          <Image
            src="/assets/team.svg"
            alt="Team Apco"
            display={{ base: "block", md: "none" }}
          />
          <Stack lineHeight={{ base: "1.5em", md: "1.8em" }}>
            <Text fontSize={{ base: "sm", md: "md" }}>
              At APCO, we're all about cutting-edge tech education. Our team of
              skilled instructors makes learning easy and enjoyable. Join us and
              be part of a community dedicated to revolutionizing how people
              learn tech.
              <br /> <br />
              What's more, working here feels like being part of a supportive
              family. We prioritize growth and teamwork, providing opportunities
              for everyone to excel, whether you're a seasoned pro or just
              starting out. Join APCO Computers and be part of something bigger.
            </Text>
          </Stack>
          <Image
            src="/assets/team.svg"
            alt="Team Apco"
            display={{ base: "none", md: "block" }}
          />
        </Grid>
      </Flex>
    </>
  );
};

export default CareerScreen;

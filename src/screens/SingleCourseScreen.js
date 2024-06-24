import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { coursedata } from "../data/coursedata";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaLanguage, FaComputer, FaGlobe } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { PiCertificateDuotone } from "react-icons/pi";

import FilledButton from "../components/FilledButton";
import OutlineButton from "../components/OutlineButton";
import { Helmet } from "react-helmet-async";

const SingleCourseScreen = () => {
  const { url } = useParams();
  const course = coursedata
    .flatMap((category) => category.courses)
    .find((course) => course.url === url);
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>{course.name} Course | APCO Computers</title>
        <meta
          name="description"
          content={`Learn ${course.name} at APCO Computers. Check out our course details, duration, and certification. Enroll now to boost your IT & Tech career.`}
        />
        <link
          rel="canonical"
          href={`https://www.apcocomputers.com/courses/${course.url}`}
        />
      </Helmet>
      <Flex
        px={{ base: "5", md: "10", lg: "20" }}
        direction="column"
        textAlign={{ base: "left", md: "justify" }}
      >
        {/* Header */}
        <Flex
          width="full"
          justifyContent="space-between"
          mt={10}
          alignItems="center"
        >
          <Heading
            as="h2"
            size={{ base: "md", md: "xl", lg: "2xl" }}
            fontWeight={{ base: "600", md: "500" }}
            fontFamily="Poppins,serif"
          >
            {course.name}
          </Heading>
          <Image
            boxSize={{ base: "100px", md: "150px", lg: "200px" }}
            src={course.icon}
            alt={course.name}
            mx={{ base: "10", md: "10", lg: "20" }}
          />
        </Flex>
        {/* Content Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "2fr 1.2fr",
            lg: "2fr 1fr",
          }}
          color="gray.600"
          gap={{ base: "10", md: "10", lg: "20" }}
          my={{ base: "5", md: "5", lg: "10" }}
        >
          {/* First Column */}
          <Flex direction="column" gap={10}>
            {/* Course Details */}
            <Flex gap={{ base: "7", md: "10", lg: "20" }}>
              <Stack>
                <Text fontSize={{ base: "sm", md: "md" }}>Course Fee</Text>
                <Text
                  fontSize={{ base: "md", md: "xl", lg: "2xl" }}
                  color="black"
                  fontWeight="500"
                >
                  ₹{course.price}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={{ base: "sm", md: "md" }}> Duration</Text>
                <Text
                  fontSize={{ base: "md", md: "xl", lg: "2xl" }}
                  color="black"
                  fontWeight="500"
                >
                  {course.duration}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={{ base: "sm", md: "md" }}> Level</Text>
                <Text
                  fontSize={{ base: "md", md: "xl", lg: "2xl" }}
                  color="black"
                  fontWeight="500"
                >
                  {course.level}
                </Text>
              </Stack>
            </Flex>
            {/* Introduction */}
            <Text
              fontSize={{ base: "sm", md: "sm", lg: "md" }}
              dangerouslySetInnerHTML={{ __html: course.content }}
            ></Text>
            {/* Enroll Button */}
            <FilledButton
              label="ENROLL NOW"
              url="/contact"
              size={{ base: "xs", md: "md" }}
              ht={{ base: "35px", md: "40px" }}
            />

            {/* Mobile 2nd Column */}
            <Flex
              direction="column"
              bgColor="rgb(249 250 251)"
              height="fit-content"
              p={{ base: "5", md: "5", lg: "10" }}
              borderRadius="xl"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
              textAlign="left"
              display={{ base: "flex", md: "none" }}
            >
              <Stack fontSize={{ base: "xs", md: "xs", lg: "sm" }} spacing={3}>
                <Text
                  fontSize={{ base: "sm", md: "sm", lg: "md" }}
                  color="black"
                >
                  Course Overview:
                </Text>
                <Flex alignItems="center" gap={2}>
                  <Icon color="#d90000" as={FaLanguage} boxSize={5} />
                  <Text>Language: English, Marathi, Hindi.</Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <Icon color="#d90000" as={GiDuration} boxSize={5} />
                  <Text>Duration: {course.duration}</Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <Icon color="#d90000" as={FaComputer} boxSize={5} />
                  <Text>Learning Mode: Center, Online</Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <Icon color="#d90000" as={FaGlobe} boxSize={5} />
                  <Text> Jurisdiction: Nationwide</Text>
                </Flex>
                <Flex alignItems="center" gap={2}>
                  <Icon color="#d90000" as={PiCertificateDuotone} boxSize={5} />
                  <Text> Certificate of Completion</Text>
                </Flex>
              </Stack>
              <Divider my={5} />
              {/* Important Dates */}
              <Stack>
                <Text
                  fontSize={{ base: "sm", md: "sm", lg: "md" }}
                  color="black"
                >
                  Important Dates:
                </Text>
                <UnorderedList
                  spacing={3}
                  fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                >
                  <ListItem>
                    Batch Commencement: One batch in each calendar month
                    (January to December).
                  </ListItem>
                  <ListItem>
                    Date(s) of Application and Fee Payment by Learner: 1st -
                    30th day of each calendar month.
                  </ListItem>
                  <ListItem>
                    Course Start Date and Date of Issuing Learner Login: Date of
                    admission confirmation.
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Flex>
            {/* Certification */}
            <Stack>
              <Heading
                as="h2"
                size={{ base: "md", md: "md", lg: "lg" }}
                fontWeight="500"
                fontFamily="Poppins,serif"
                color="black"
              >
                Certification
              </Heading>
              <Text
                ml={{ base: "5", md: "10" }}
                fontSize={{ base: "sm", md: "sm", lg: "md" }}
                dangerouslySetInnerHTML={{ __html: course.certification }}
                lineHeight={{ base: "1.5em", md: "1.5em", lg: "2em" }}
              ></Text>
            </Stack>
            {/* Accordian */}
            <Accordion allowToggle>
              {/* Objective */}
              <AccordionItem borderTop="none">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _hover={{ bgColor: "none" }}
                        py={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="black"
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Objectives
                        </Box>
                        {isExpanded ? (
                          <FaMinus fontSize="16px" />
                        ) : (
                          <FaPlus fontSize="16px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      dangerouslySetInnerHTML={{ __html: course.objective }}
                      fontSize={{ base: "sm", md: "sm", lg: "md" }}
                    ></AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* Syllabus */}
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _hover={{ bgColor: "none" }}
                        py={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="black"
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Syllabus
                        </Box>
                        {isExpanded ? (
                          <FaMinus fontSize="16px" />
                        ) : (
                          <FaPlus fontSize="16px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      lineHeight="2em"
                      dangerouslySetInnerHTML={{ __html: course.syllabus }}
                      fontSize={{ base: "sm", md: "sm", lg: "md" }}
                    ></AccordionPanel>
                  </>
                )}
              </AccordionItem>
              {/* Course Topics */}
              <AccordionItem borderBottom="none">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _hover={{ bgColor: "none" }}
                        py={5}
                        fontWeight="semibold"
                        fontSize="lg"
                        color="black"
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Course Topics
                        </Box>
                        {isExpanded ? (
                          <FaMinus fontSize="16px" />
                        ) : (
                          <FaPlus fontSize="16px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      pb={4}
                      lineHeight="2em"
                      dangerouslySetInnerHTML={{ __html: course.topics }}
                      fontSize={{ base: "sm", md: "sm", lg: "md" }}
                    ></AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Flex>
          {/* 2nd Column */}
          <Flex
            direction="column"
            bgColor="rgb(249 250 251)"
            height="fit-content"
            p={{ base: "5", md: "5", lg: "10" }}
            borderRadius="xl"
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
            textAlign="left"
            display={{ base: "none", md: "flex" }}
          >
            <Stack fontSize={{ base: "xs", md: "xs", lg: "sm" }} spacing={3}>
              <Text fontSize={{ base: "sm", md: "sm", lg: "md" }} color="black">
                Course Overview:
              </Text>
              <Flex alignItems="center" gap={2}>
                <Icon color="#d90000" as={FaLanguage} boxSize={5} />
                <Text>Language: English, Marathi, Hindi.</Text>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Icon color="#d90000" as={GiDuration} boxSize={5} />
                <Text>Duration: {course.duration}</Text>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Icon color="#d90000" as={FaComputer} boxSize={5} />
                <Text>Learning Mode: Center, Online</Text>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Icon color="#d90000" as={FaGlobe} boxSize={5} />
                <Text> Jurisdiction: Nationwide</Text>
              </Flex>
              <Flex alignItems="center" gap={2}>
                <Icon color="#d90000" as={PiCertificateDuotone} boxSize={5} />
                <Text> Certificate of Completion</Text>
              </Flex>
            </Stack>
            <Divider my={5} />
            {/* Important Dates */}
            <Stack>
              <Text fontSize={{ base: "sm", md: "sm", lg: "md" }} color="black">
                Important Dates:
              </Text>
              <UnorderedList
                spacing={3}
                fontSize={{ base: "xs", md: "xs", lg: "sm" }}
              >
                <ListItem>
                  Batch Commencement: One batch in each calendar month (January
                  to December).
                </ListItem>
                <ListItem>
                  Date(s) of Application and Fee Payment by Learner: 1st - 30th
                  day of each calendar month.
                </ListItem>
                <ListItem>
                  Course Start Date and Date of Issuing Learner Login: Date of
                  admission confirmation.
                </ListItem>
              </UnorderedList>
            </Stack>
          </Flex>
        </Grid>
      </Flex>
      {/* Footer Banner */}
      <Box
        bgGradient="linear-gradient(to bottom, #0f0c29, #302b63, #24243e)"
        w="full"
        h={{ base: "300px", md: "350px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={5}
        p={5}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="semibold"
          color="whitesmoke"
          textAlign="center"
          w={{ base: "xs", md: "xl" }}
        >
          Enroll for this course now and boost your IT & Tech career.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="whitesmoke">
          Master {course.name} today.
        </Text>
        <OutlineButton
          label="ENROLL NOW"
          url="/contact"
          size={{ base: "xs", md: "md" }}
          ht={{ base: "35px", md: "40px" }}
        />
      </Box>
    </>
  );
};

export default SingleCourseScreen;

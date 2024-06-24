import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import CourseCard from "../components/CourseCard";
import { coursedata } from "../data/coursedata";
import { Helmet } from "react-helmet-async";

const AllCoursesScreen = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Explore Courses - Apco Computers</title>
        <meta
          name="description"
          content="Discover our best courses including MS-CIT, Advanced Excel, and Advanced Tally, alongside a wide range of other tech courses offered by Apco Computers. Start your tech journey today!"
        />
        <link rel="canonical" href="https://www.apcocomputers.com/courses" />
      </Helmet>
      {/* Banner */}
      <Box
        w="full"
        h={{ base: "200px", md: "200px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="#f8f8f8"
      >
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
          mx={20}
        >
          Explore our <span style={{ color: "#D90000" }}>Courses</span>
        </Heading>
      </Box>

      {/* Caregory */}
      <Flex py="10" gap="5" direction="column" justifyContent="center">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: "5", md: "7", lg: "10" }}
          px={{ base: "10", md: "10", lg: "20" }}
          my={10}
        >
          {coursedata.map((category) =>
            category.courses.map((course) => (
              <CourseCard key={course.name} course={course} />
            ))
          )}
        </Grid>
      </Flex>
    </>
  );
};

export default AllCoursesScreen;

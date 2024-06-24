import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import CourseCard from "../components/CourseCard";
import { coursedata } from "../data/coursedata";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CategoryScreen = () => {
  const { url } = useParams();
  const category = coursedata.find((category) => category.url === url);

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>{`${category.category} Courses - APCO Computers`}</title>
        <meta
          name="description"
          content={`Explore all ${category.category} courses offered by APCO Computers. Enroll now and start your journey into ${category.category}.`}
        />
      </Helmet>
      {/* Banner */}
      <Box
        w="full"
        h={{ base: "150px", md: "200px" }}
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
          mx={{ base: "5", md: "20" }}
        >
          All <span style={{ color: "#D90000" }}> {category.category}</span>{" "}
          Courses{" "}
        </Heading>
      </Box>

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
        {category.courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </Grid>
    </>
  );
};

export default CategoryScreen;

import { Grid, Heading, Link, List, ListItem, Stack } from "@chakra-ui/react";
import { coursedata } from "../data/coursedata";

const CourseList = ({ subject, courses }) => (
  <Stack gap="4" px={2}>
    <Heading
      size={{ base: "xs", md: "xs", lg: "sm" }}
      fontFamily="Poppins, serif"
    >
      {subject}
    </Heading>
    <List spacing={2} fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
      {courses.map((course, index) => (
        <ListItem key={index}>
          <Link
            href={`/courses/${course.url}`}
            _hover={{ textDecoration: "none", color: "#D90000" }}
          >
            {course.name}
          </Link>
        </ListItem>
      ))}
    </List>
  </Stack>
);

const MegaMenu = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={2} p={5} w="100vw">
      {coursedata.slice(0, 5).map((category, index) => (
        <CourseList
          key={index}
          subject={category.category}
          courses={category.courses}
        />
      ))}
    </Grid>
  );
};

export default MegaMenu;

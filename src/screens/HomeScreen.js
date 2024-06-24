import {
  Flex,
  Text,
  Box,
  Grid,
  Heading,
  Stack,
  Link,
  Image,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import FilledButton from "../components/FilledButton";
import OutlineButton from "../components/OutlineButton";
import { MdCheck } from "react-icons/md";
import Categories from "../components/Categories";
import { coursedata } from "../data/coursedata";
import CourseCard from "../components/CourseCard";
import Success from "../components/Success";
import Chose from "../components/Chose";
import Testimonial from "../components/Testimonial";
import { reviews } from "../data/reviews";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "../components/CustomDot";
import { Helmet } from "react-helmet-async";

const HomeScreen = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleScrollToChose = () => {
    const choseElement = document.getElementById("chose");
    if (choseElement) {
      choseElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>APCO Computers - Empowering Careers in Technology</title>
        <meta
          name="description"
          content="Welcome to APCO Computers! With over 21 years of expertise, we offer a range of tech courses designed to transform lives. Join us to launch your tech career today!"
        />
        <link rel="canonical" href="https://www.apcocomputers.com/" />
      </Helmet>
      {/* Main Banner */}
      <Box
        bgImage={{
          base: "url('../assets/hero-mob.jpg')",
          md: "url('../assets/hero.jpg')",
        }}
        bgPosition="center"
        backgroundSize="100% 100%"
        w="full"
        h={{ base: "300px", md: "350px", lg: "460px" }}
        display="flex"
        alignItems="center"
      >
        <Stack
          mx={{ base: "5", md: "10", lg: "20" }}
          spacing={{ base: "5", md: "8" }}
        >
          <Flex
            w={{ base: "xs", md: "lg", lg: "2xl" }}
            gap={{ base: "4", md: "6" }}
            direction="column"
          >
            <Stack>
              <Heading
                as="h1"
                size={{ base: "md", md: "xl", lg: "2xl" }}
                fontWeight="semibold"
                fontFamily="Poppins,serif"
              >
                <span style={{ color: "#D90000" }}>21 Years</span> of Expertise
              </Heading>
              <Heading
                as="h3"
                size={{ base: "md", md: "md", lg: "lg" }}
                fontWeight="semibold"
                fontFamily="Poppins,serif"
              >
                Transforming Lives Through Technology.
              </Heading>
            </Stack>
            <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
              Launch your tech career with Apco Computers. Our proven curriculum
              and experienced instructors will equip you with the skills and
              confidence to excel in the field.
            </Text>
          </Flex>
          <Stack direction="row" gap="5">
            <Link
              as={RouterLink}
              to="/courses"
              onClick={() => {
                window.scrollTo({ top: "0", behavior: "auto" });
              }}
            >
              <FilledButton
                label="OUR COURSES"
                size={{ base: "xs", md: "md" }}
                ht={{ base: "35px", md: "40px" }}
              />
            </Link>
            <Link
              as={RouterLink}
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: "0", behavior: "auto" });
              }}
            >
              <OutlineButton
                label="CONTACT US"
                size={{ base: "xs", md: "md" }}
                ht={{ base: "35px", md: "40px" }}
              />
            </Link>
          </Stack>
        </Stack>
      </Box>
      {/* Welcome Section */}
      <Flex
        direction="column"
        my={20}
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        <Stack textAlign="center" w={{ base: "sm", md: "2xl" }}>
          <Heading
            as="h1"
            size={{ base: "md", md: "xl" }}
            fontWeight="semibold"
            fontFamily="Poppins,serif"
          >
            Welcome to <span style={{ color: "#D90000" }}>APCO Computers</span>
          </Heading>
          <Text
            fontSize={{ base: "xs", md: "md" }}
            fontStyle="italic"
            py="10px"
          >
            At Apco Computers, we empower you to gain the skills and confidence
            you need to succeed in today's dynamic tech industry.
          </Text>
        </Stack>
        <Grid
          templateColumns={{ base: "none", md: "2fr 3fr" }}
          px={{ base: "10", md: "10", lg: "40" }}
          gap={{ base: "10", md: "8" }}
          templateRows={{ base: "0.5fr 1fr", md: "none" }}
        >
          <Image src="/assets/welcome.svg" alt="Welcome Apco" />
          <Stack gap={5} fontSize={{ base: "xs", md: "xs", lg: "sm" }}>
            <Text>
              At APCO Computers, we're here to help you succeed in the world of
              technology. With our friendly instructors and flexible classes,
              we'll support you every step of the way.
            </Text>
            <List spacing={{ base: "1", md: "1", lg: "3" }}>
              <ListItem>
                <ListIcon
                  as={MdCheck}
                  boxSize={{ base: "3", md: "3", lg: "5" }}
                  color="#D90000"
                />
                Learn accounting, programming, cybersecurity, and more.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheck}
                  boxSize={{ base: "3", md: "3", lg: "5" }}
                  color="#D90000"
                />
                Industry professionals as instructors, committed to your
                success.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheck}
                  boxSize={{ base: "3", md: "3", lg: "5" }}
                  color="#D90000"
                />
                Flexible class options: part-time, morning, or evening classes.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheck}
                  boxSize={{ base: "3", md: "3", lg: "5" }}
                  color="#D90000"
                />
                Get help with job placement and attend networking events.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={MdCheck}
                  boxSize={{ base: "3", md: "3", lg: "5" }}
                  color="#D90000"
                />
                Special offer: 100% job guarantee on the Apco Special Combo
                Course.
              </ListItem>
            </List>
            <Stack
              direction="row"
              gap="5"
              my="4"
              justifyContent={{ base: "center", md: "start" }}
            >
              <Link
                as={RouterLink}
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: "0", behavior: "auto" });
                }}
              >
                <FilledButton
                  label="ABOUT US"
                  size={{ base: "xs", md: "md" }}
                  ht={{ base: "35px", md: "40px" }}
                />
              </Link>
              <OutlineButton
                label="WHY CHOSE US"
                onClick={handleScrollToChose}
                size={{ base: "xs", md: "md" }}
                ht={{ base: "35px", md: "40px" }}
              />
            </Stack>
          </Stack>
        </Grid>
      </Flex>
      {/* Course Categories */}
      <Stack bgColor="#f8f8f8" py="10" spacing="10">
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
          textAlign="center"
        >
          <span style={{ color: "#D90000" }}>Course </span> Categories
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: "4", md: "10" }}
          px={{ base: "4", md: "10", lg: "20" }}
        >
          {coursedata.map((category) => (
            <Categories key={category.id} category={category} />
          ))}
        </Grid>
      </Stack>
      {/* Popular Courses */}
      <Flex
        py="10"
        gap="10"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
          textAlign="center"
        >
          Our <span style={{ color: "#D90000" }}>Popular </span> Courses
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={{ base: "4", md: "7" }}
          px={{ base: "0", md: "10" }}
        >
          {coursedata.map((category) =>
            category.courses.map((course) =>
              course.popular ? (
                <CourseCard key={course.name} course={course} />
              ) : null
            )
          )}
        </Grid>

        <FilledButton
          url="/courses"
          label="VIEW ALL COURSES"
          size={{ base: "xs", md: "md" }}
          ht={{ base: "35px", md: "40px" }}
        />
      </Flex>
      {/* Why Chose US */}
      <Chose />
      {/* Success Section */}
      <Success />
      {/* Testimonials */}
      <Stack mt={{ base: "0", md: "20" }}>
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
          mt={{ base: "0", md: "10" }}
          textAlign="center"
        >
          Hear from Our
          <span style={{ color: "#D90000" }}> Students</span>
        </Heading>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          customDot={<CustomDot />}
        >
          {reviews.map((review) => (
            <Testimonial key={review.id} review={review} />
          ))}
        </Carousel>
      </Stack>
      ;
    </>
  );
};

export default HomeScreen;

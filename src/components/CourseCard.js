import React from "react";
import {
  CardBody,
  Card,
  Image,
  Text,
  CardFooter,
  Flex,
  Badge,
  Link,
} from "@chakra-ui/react";

const CourseCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.url}`} _hover={{ textDecoration: "none" }}>
      <Card
        maxW="sm"
        overflow="hidden"
        transition="transform 0.3s ease"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          transform: "scale(1.05)",
          background: "rgba(255,192,203,0.15)",
          border: "1px solid rgba(255,192,203,0.1)",
        }}
        css={{
          "@keyframes shake": {
            "0%": { transform: "translateX(0)" },
            "10%": { transform: "translateX(-1px)" },
            "20%": { transform: "translateX(1px)" },
            "30%": { transform: "translateX(-1px)" },
            "40%": { transform: "translateX(1px)" },
            "50%": { transform: "translateX(-0.5px)" },
            "60%": { transform: "translateX(0.5px)" },
            "70%": { transform: "translateX(-0.5px)" },
            "80%": { transform: "translateX(0.5px)" },
            "90%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(0)" },
          },
          "&:hover img": {
            animation: "shake 1s ease-in-out",
            transform: "scale(1.02)",
          },
        }}
      >
        <CardBody pb="0">
          <Image
            boxSize={{ base: "60px", md: "120px" }}
            src={course.icon}
            alt={course.name}
            w="full"
            m="auto"
          />
          <Flex justifyContent="center" mt={{ base: "5", md: "8" }}>
            <Text
              fontSize={{ base: "xs", md: "md" }}
              fontWeight="semibold"
              noOfLines="1"
            >
              {course.name}
            </Text>
          </Flex>
        </CardBody>
        <CardFooter pt="5">
          <Flex justifyContent="space-between" w="full">
            <Badge
              variant="subtle"
              colorScheme={
                course.level === "Begineer"
                  ? "purple"
                  : course.level === "Intermediate"
                  ? "orange"
                  : "green"
              }
              fontSize={{ base: "2xs", md: "xs" }}
            >
              {course.level}
            </Badge>

            <Badge
              variant="subtle"
              colorScheme="pink"
              fontSize={{ base: "2xs", md: "xs" }}
            >
              {course.duration}
            </Badge>
          </Flex>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;

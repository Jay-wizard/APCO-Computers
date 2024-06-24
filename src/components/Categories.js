import { Image, Flex, Text, Link, Icon } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Categories = ({ category }) => {
  return (
    <>
      <Link
        href={`/category/${category.url}`}
        _hover={{ textDecoration: "none" }}
      >
        <Flex
          alignItems="center"
          gap={{ base: "2", md: "3", lg: "8" }}
          py="4"
          px={{ base: "1", md: "5", lg: "8" }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          borderRadius="xl"
          transition="all 0.3s ease-in-out"
          _hover={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            bgColor: "white",
            color: "#D90000",
            "& > svg": { display: "block" },
          }}
        >
          <Image
            src={category.categoryIcon}
            boxSize={{ base: "8", md: "30", lg: "50" }}
          />
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            fontWeight="semibold"
            noOfLines="2"
          >
            {category.category}
          </Text>
          <Icon as={MdOutlineKeyboardArrowRight} boxSize="5" display="none" />
        </Flex>
      </Link>
    </>
  );
};

export default Categories;

import React from "react";
import { List, ListItem, Link, Heading, Flex } from "@chakra-ui/react";

const FooterNav = ({ heading, items, display = "flex" }) => {
  return (
    <Flex
      w="full"
      justifyContent={{ base: "left", md: "center" }}
      display={display}
    >
      <List spacing={2} w="fit-content">
        <Heading
          as="h6"
          size={{ base: "xs", md: "xs", lg: "sm" }}
          mb={{ base: "0", md: "4" }}
          display={{ base: "none", md: "block" }}
          fontFamily="Poppins, serif"
          fontWeight="semibold"
        >
          {heading}
        </Heading>
        {items.map((item, index) => (
          <ListItem key={index} fontSize={{ base: "sm", md: "xs", lg: "sm" }}>
            <Link _hover={{ color: "#D90000" }} href={item.url}>
              {item.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default FooterNav;

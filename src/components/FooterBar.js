import React from "react";
import { Flex, Link, Icon, Text } from "@chakra-ui/react";
import { FaXTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

const FooterBar = () => {
  const socialmedias = [
    {
      icon: FaSquareFacebook,
      url: "#",
    },
    {
      icon: FaLinkedin,
      url: "#",
    },
    {
      icon: FaXTwitter,
      url: "#",
    },
  ];

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={{ base: "3", md: "3" }}
        px={{ base: "5", md: "20" }}
        bgColor="#f2f2f2"
        direction={{ base: "column-reverse", md: "row" }}
        gap={2}
      >
        <Text color="gray" fontSize={{ base: "xs", md: "sm" }}>
          Copyright © {new Date().getFullYear()} APCO Computers. All Rights
          Reserved.
        </Text>
        <Flex gap={5} alignItems="center">
          {socialmedias.map((item, index) => (
            <Link to={item.url} key={index}>
              <Icon _hover={{ color: "#D90000" }} boxSize={5} as={item.icon} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default FooterBar;

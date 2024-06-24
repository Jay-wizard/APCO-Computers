import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Grid,
  Text,
  Heading,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import FooterNav from "./FooterNav";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import FooterBar from "./FooterBar";

const Footer = () => {
  const companyInfo = [
    {
      text: "ABOUT",
      url: "/about",
    },
    { text: "COURSES ", url: "/courses" },
    { text: "CAREERS", url: "/careers" },
    { text: "CONTACT", url: "/contact" },
  ];
  const populerCourses = [
    {
      text: "MS-CIT",
      url: "/courses/ms-cit",
    },
    { text: "ADV. Excel ", url: "/courses/adv-excel" },
    { text: "ADV. Tally", url: "/courses/adv-tally" },
    { text: "KLiC Graphic Designing", url: "/courses/klic-graphic-designing" },
    { text: "KLiC Cyber Security", url: "/courses/klic-cyber-security" },
  ];

  return (
    <>
      <Flex
        as="footer"
        justifyContent="center"
        alignItems="center"
        direction="column"
        mt={10}
        borderTop="1px solid darkgray"
        mx={{ base: "5", md: "10", lg: "4em" }}
      >
        <Grid
          templateColumns={{ base: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          templateRows={{ base: "1fr", md: "auto" }}
          gap="8"
          mx={{ lg: "4em" }}
          my={{ base: "5", md: "4em" }}
          w="fit-content"
          justifyContent="center"
        >
          {/* Logo */}
          <Image
            objectFit="fill"
            src="../assets/logo.png"
            alt="logo"
            w={{ base: "120px", md: "120px", lg: "150px" }}
          />

          {/* 2nd Col */}
          <Flex direction="column" gap={3}>
            <Flex>
              <Icon
                as={FaLocationDot}
                mr="3"
                boxSize={{ base: "3", md: "4" }}
              />
              <Text
                fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                textAlign="justify"
              >
                Shop No. 3 & 4, Opp. Ambivali Railway Station, Ambivali West,
                Kalyan - 421102.
              </Text>
            </Flex>
            <Link
              as={RouterLink}
              to="tel: +91 9220382038"
              fontSize={{ base: "xs", md: "xs", lg: "sm" }}
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none", color: "#D90000" }}
            >
              <Icon as={FaPhone} mr="3" boxSize={{ base: "3", md: "4" }} />
              +91 9220382038
            </Link>
            <Link
              as={RouterLink}
              to="mailto:info@apcocomputers.com"
              fontSize={{ base: "xs", md: "xs", lg: "sm" }}
              display="flex"
              alignItems="center"
              _hover={{ textDecoration: "none", color: "#D90000" }}
            >
              <Icon as={MdEmail} mr="3" boxSize={{ base: "3", md: "4" }} />
              info@apcocomputers.com
            </Link>
          </Flex>

          {/* 3rd Col */}
          <FooterNav
            display={{ base: "none", md: "flex" }}
            heading="COMPANY"
            items={companyInfo}
          />

          {/* 4th Col */}
          <FooterNav
            display={{ base: "none", md: "flex" }}
            heading="POPULAR COURSES"
            items={populerCourses}
          />
        </Grid>

        {/* Footer Mobile Accordion */}
        <Flex
          w="full"
          direction="column"
          gap={3}
          display={{ base: "flex", md: "none" }}
        >
          <Accordion allowToggle>
            {/* Company */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _hover={{ bgColor: "none" }}
                    borderTop="none"
                  >
                    <Heading as="h6" flex="1" textAlign="left" size="sm">
                      COMPANY
                    </Heading>
                    {isExpanded ? (
                      <FiMinus fontSize="12px" />
                    ) : (
                      <FiPlus fontSize="12px" />
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <FooterNav items={companyInfo} />
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            {/* Courses */}
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <AccordionButton _hover={{ bgColor: "none" }}>
                    <Heading as="h6" flex="1" textAlign="left" size="sm">
                      POPULAR COURSES
                    </Heading>
                    {isExpanded ? (
                      <FiMinus fontSize="12px" />
                    ) : (
                      <FiPlus fontSize="12px" />
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <FooterNav items={populerCourses} />
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
      <FooterBar />
    </>
  );
};

export default Footer;

import {
  Box,
  Flex,
  Link,
  Image,
  Icon,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import AnnounceBar from "./AnnounceBar";
import { MdMenu, MdClose } from "react-icons/md";
import SingleMenuItem from "./SingleMenuItem";
import { Link as RouterLink } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { BiChevronDown } from "react-icons/bi";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { coursedata } from "../data/coursedata";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuItemClick = () => {
    onClose(); // Close the drawer when a menu item is clicked
  };
  return (
    <>
      <AnnounceBar />
      <Flex
        as="header"
        justifyContent={{ base: "space-between", md: "space-around" }}
        alignItems="center"
        wrap="wrap"
        py="4"
        px={{ base: "10", md: "8" }}
        w="full"
        bgColor="white"
        pos="sticky"
        top="0"
        borderBottom="0.1px solid lightgray"
        boxShadow={{ base: "none", md: "rgba(0, 0, 0, 0.16) 0px 1px 2px" }}
        zIndex="9999"
      >
        {/* Logo */}
        <Link
          as={RouterLink}
          to="/"
          color="whiteAlpha.800"
          fontWeight="bold"
          letterSpacing="wide"
          _hover={{ textDecor: "none", color: "white" }}
          onClick={() => {
            handleMenuItemClick();
            window.scrollTo({ top: "0", behavior: "smooth" });
          }}
        >
          <Image
            objectFit="fill"
            h={{ base: "50px", md: "60px" }}
            p={1}
            src="../assets/logo.png"
            alt="logo"
            transform="scale(1.5)"
          />
        </Link>

        {/* Mobile Drawer */}
        {/* Drawer Icon */}
        <Box display={{ base: "block", md: "none" }}>
          {isOpen ? (
            <Icon as={MdClose} boxSize={6} onClick={handleMenuItemClick} />
          ) : (
            <Icon as={MdMenu} boxSize={6} onClick={onOpen} />
          )}

          <Drawer
            placement="right"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody mt="110px" px="10">
                <Flex
                  direction="column"
                  gap="5"
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  <Link
                    href="/"
                    onClick={handleMenuItemClick}
                    _hover={{ textDecoration: "none", color: "#d90000" }}
                  >
                    HOME
                  </Link>
                  <Link
                    href="/about"
                    onClick={handleMenuItemClick}
                    _hover={{ textDecoration: "none", color: "#d90000" }}
                  >
                    ABOUT
                  </Link>
                  {/* Courses */}
                  <Accordion allowToggle>
                    <AccordionItem border="none">
                      {({ isExpanded }) => (
                        <>
                          <AccordionButton
                            _hover={{ bgColor: "none", color: "#d90000" }}
                            p="0"
                          >
                            <Text
                              textAlign="left"
                              fontSize="lg"
                              fontWeight="semibold"
                              mr={3}
                            >
                              COURSES
                            </Text>
                            {isExpanded ? (
                              <FaAngleDown fontSize="12px" />
                            ) : (
                              <FaAngleRight fontSize="12px" />
                            )}
                          </AccordionButton>

                          <AccordionPanel pb={4}>
                            <List spacing={5}>
                              {coursedata.map((category, index) => (
                                <ListItem
                                  key={index}
                                  fontSize="md"
                                  textTransform="uppercase"
                                >
                                  <Link
                                    _hover={{ color: "#D90000" }}
                                    href={`/category/${category.url}`}
                                  >
                                    {category.category}
                                  </Link>
                                </ListItem>
                              ))}
                            </List>
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Accordion>

                  <Link
                    href="/careers"
                    onClick={handleMenuItemClick}
                    _hover={{ textDecoration: "none", color: "#d90000" }}
                  >
                    CAREERS
                  </Link>
                  <Link
                    href="/contact"
                    onClick={handleMenuItemClick}
                    _hover={{ textDecoration: "none", color: "#d90000" }}
                  >
                    CONTACT
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        {/* Links */}
        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "450px", lg: "550px" }}
          justifyContent="space-evenly"
        >
          <SingleMenuItem label="HOME" url="/" onClick={handleMenuItemClick} />

          <SingleMenuItem
            label="ABOUT"
            url="/about"
            onClick={handleMenuItemClick}
          />

          {/* MegaMenu */}
          <Menu isLazy>
            <MenuButton
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              letterSpacing="wide"
              mr={{ base: "0", md: "0", lg: "5" }}
              color="#021824"
              fontWeight="500"
              _hover={{ textDecor: "none", color: "#D90000" }}
              as={Button}
              bgColor="transparent"
              p={0}
              _expanded={{ bgColor: "transparent" }}
              _active={{ bgColor: "transparent" }}
              rightIcon={<BiChevronDown />}
            >
              COURSES
            </MenuButton>
            <Flex
              alignItems="center"
              justifyContent="center"
              position="fixed"
              bgColor="rgba(0,0,0,0.5)"
            >
              <MenuList
                position="relative"
                top="18px"
                border="none"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
              >
                <MenuItem _hover={{ bgColor: "transparent" }} bgColor="white">
                  <MegaMenu />
                </MenuItem>
              </MenuList>
            </Flex>
          </Menu>

          {/* <SingleMenuItem
            label="COURSES"
            url="/services"
            onClick={handleMenuItemClick}
          /> */}
          <SingleMenuItem
            label="CAREERS"
            url="/careers"
            onClick={handleMenuItemClick}
          />
          <SingleMenuItem
            label="CONTACT"
            url="/contact"
            onClick={handleMenuItemClick}
          />
        </Box>
      </Flex>
    </>
  );
};
export default Header;

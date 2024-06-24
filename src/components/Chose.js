import React from "react";
import {
  Flex,
  Text,
  Box,
  Grid,
  Heading,
  Stack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Chose = () => {
  return (
    <Flex
      id="chose"
      direction="column"
      my={10}
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Stack textAlign="center" w={{ base: "xs", md: "2xl" }}>
        <Heading
          as="h1"
          size={{ base: "md", md: "xl" }}
          fontWeight="semibold"
          fontFamily="Poppins,serif"
        >
          Why Chose <span style={{ color: "#D90000" }}>APCO Computers</span>
        </Heading>
        <Text fontSize={{ base: "xs", md: "md" }} fontStyle="italic" py="10px">
          Our team has awesome teachers and trainers. They know their stuff, so
          you can feel totally comfortable with us.
        </Text>
      </Stack>
      <Grid
        templateColumns={{ base: "none", md: "3fr 2fr" }}
        templateRows={{ base: "1fr 1fr", md: "none" }}
        px={{ base: "8", md: "10", lg: "20" }}
        gap={{ base: "1", md: "20" }}
        alignItems="center"
      >
        <Image
          src="/assets/chose.png"
          alt="Welcome Apco"
          display={{ base: "block", md: "none" }}
        />
        <Stack gap={5} fontSize={{ base: "sm", md: "md" }}>
          <Text>
            Discover what makes APCO Computers the go-to place for learning tech
            skills.
          </Text>
          <Accordion allowToggle>
            <AccordionItem borderTop="none">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton py={3}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Individual Attention
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "xs", md: "sm" }}>
                    Small classes mean our teachers can give you more help and
                    focus on your learning needs.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton py={3}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Learning by Doing
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "xs", md: "sm" }}>
                    We believe in hands-on practice, where you'll learn by
                    actually doing projects rather than just listening to
                    lectures.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton py={3}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Affordable Fees
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "xs", md: "sm" }}>
                    Our prices are fair and won't break your budget, making
                    quality education accessible to everyone.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton py={3}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Practical Skills
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "xs", md: "sm" }}>
                    You'll learn skills that are directly applicable to
                    real-world situations, ensuring you're prepared for the job
                    market.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem borderBottom="none">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton py={3}>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Modern Facilities
                      </Box>
                      {isExpanded ? (
                        <FaMinus fontSize="12px" />
                      ) : (
                        <FaPlus fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontSize={{ base: "xs", md: "sm" }}>
                    Our facilities are equipped with the latest technology,
                    providing you with the best tools and resources for your
                    education.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Stack>
        <Image
          src="/assets/chose.png"
          alt="Welcome Apco"
          display={{ base: "none", md: "block" }}
        />
      </Grid>
    </Flex>
  );
};

export default Chose;

import {
  Textarea,
  FormControl,
  Input,
  Spacer,
  Flex,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { React, useRef, useState } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import { coursedata } from "../data/coursedata";

const ContactForm = () => {
  const form = useRef();
  const toast = useToast();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_f0kja2s", //YOUR_SERVICE_ID
        "template_nii2xx8", //YOUR_TEMPLATE_ID
        form.current,
        "5gCM2sc6EUwqxh6pR" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          navigate("/");
          toast({
            title: "Form Submitted",
            description: "We'll get back to you as soon as possible",
            status: "success",
            duration: 2000,
          });
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <Flex
      direction="column"
      w="full"
      alignItems="flex-end"
      justifyContent="center"
    >
      <FormContainer width={{ base: "xs", md: "sm", lg: "xl" }}>
        <form ref={form} onSubmit={sendEmail}>
          {/* Name */}
          <FormControl id="name" isRequired>
            <Input
              variant="filled"
              type="text"
              name="from_name"
              placeholder="Enter Full Name"
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <Spacer h="6" />

          {/* Email & Phone */}
          <Flex>
            <FormControl flex="1" mr={{ base: 1, md: 1, lg: 4 }}>
              <Input
                variant="filled"
                type="tel"
                name="phone"
                placeholder="Enter Phone No."
                fontSize={{ base: "sm", md: "md" }}
                isRequired
                maxLength="10"
              />
            </FormControl>
            <FormControl flex="1" ml={{ base: 0, md: 1, lg: 4 }}>
              <Input
                variant="filled"
                type="email"
                name="to_email"
                placeholder="Enter Email Address"
                fontSize={{ base: "sm", md: "md" }}
                isRequired
              />
            </FormControl>
          </Flex>
          <Spacer h="6" />

          {/* Course */}
          <FormControl>
            <Select
              name="course"
              variant="filled"
              placeholder="Select Course"
              color="#718096"
              fontSize={{ base: "sm", md: "md" }}
              isRequired
            >
              {coursedata.map((category) =>
                category.courses.map((course, index) => (
                  <option key={index}>{course.name}</option>
                ))
              )}
            </Select>
          </FormControl>
          <Spacer h="6" />

          {/* Message */}
          <FormControl id="message">
            <Textarea
              variant="filled"
              type="text"
              name="message"
              placeholder="Message"
              fontSize={{ base: "sm", md: "md" }}
            />
          </FormControl>
          <Spacer h="6" />

          <Button
            isLoading={isLoading}
            loadingText="Sending"
            type="submit"
            color="white"
            transition="box-shadow .15s, transform .15s"
            bgGradient="linear-gradient(100deg, rgba(125, 20, 29, 1) 0%, rgba(255, 30, 39, 1) 100%)"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0 4px 8px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 1) 0 -3px 0 inset",
              transform: "translateY(-2px)",
            }}
            _active={{
              boxShadow: "rgba(0, 0, 0, 0.4) 0 3px 7px inset",
              transform: "translateY(2px)",
            }}
            _focus={{
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0 0 0 1.5px inset, rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 1) 0 -3px 0 inset",
            }}
            w="full"
            fontSize={{ base: "sm", md: "md" }}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "auto" });
            }}
          >
            SUBMIT
          </Button>
        </form>
      </FormContainer>
    </Flex>
  );
};

export default ContactForm;

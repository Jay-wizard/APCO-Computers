import { Button, Link } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";

const OutlineButton = ({ label, size = "md", ht = "40px", url, onClick }) => {
  return (
    <Link href={url}>
      <Button
        onClick={onClick}
        w="fit-content"
        fontSize={size}
        height={ht}
        paddingX="16px"
        borderRadius="4px"
        backgroundColor="#FCFCFD"
        color="#D90000"
        letterSpacing="wider"
        boxShadow="rgba(217, 0, 0, 0.4) 0 2px 4px, rgba(217, 0, 0, 0.3) 0 7px 13px -3px, rgba(214, 0, 0, 0.5) 0 -3px 0 inset"
        transition="box-shadow .15s, transform .15s"
        _hover={{
          boxShadow:
            "rgba(217, 0, 0, 0.4) 0 4px 8px, rgba(217, 0, 0, 0.3) 0 7px 13px -3px, rgba(214, 0, 0, 0.5) 0 -3px 0 inset",
          transform: "translateY(-2px)",
        }}
        _active={{
          boxShadow: "rgba(214, 0, 0, 0.5) 0 3px 7px inset",
          transform: "translateY(2px)",
        }}
        _focus={{
          boxShadow:
            "rgba(214, 0, 0, 0.5) 0 0 0 1.5px inset, rgba(217, 0, 0, 0.4) 0 2px 4px, rgba(217, 0, 0, 0.3) 0 7px 13px -3px, rgba(214, 0, 0, 0.5) 0 -3px 0 inset",
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default OutlineButton;

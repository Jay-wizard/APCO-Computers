import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SingleMenuItem = ({ url, icon, label }) => {
  // const navigate = useNavigate();
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize={{ base: "xs", md: "sm", lg: "md" }}
      letterSpacing="wide"
      mr={{ base: "0", md: "0", lg: "5" }}
      display="flex"
      alignItems="center"
      color="#021824"
      fontWeight="500"
      _hover={{ textDecor: "none", color: "#D90000" }}
      onClick={() => {
        window.scrollTo({ top: "0", behavior: "auto" });
      }}
    >
      {icon}
      {label}
    </Link>
  );
};

export default SingleMenuItem;

import { Box } from "@chakra-ui/react";

const Map = () => {
  return (
    <Box mt={10}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.3971257121776!2d73.17109582023035!3d19.26696534269411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797aca03bb411%3A0x357770c903201353!2sAPCO%20Computers!5e0!3m2!1sen!2sin!4v1712822603245!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;

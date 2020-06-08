import React from "react";
import { Box } from "reflexbox";

const SvgIcon = ({ children, ...props }) => {
  return (
    <Box as="svg" xmlns="http://www.w3.org/2000/svg" role="img" fill="currentcolor" {...props}>
      {children}
    </Box>
  );
};

export default SvgIcon;

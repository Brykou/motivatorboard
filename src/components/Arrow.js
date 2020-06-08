import React from "react";
import { Box, Flex } from "reflexbox";

const Arrow = (props) => {
  return (
    <Flex {...props}>
      <Box width="100%" bg="accent" />
      <Box
        sx={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "50px 0 50px 86.6px",
          borderTopColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "accent",
        }}
      />
    </Flex>
  );
};

export default Arrow;

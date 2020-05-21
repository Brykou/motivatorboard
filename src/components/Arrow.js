import React from "react";
import { Box, Flex } from "reflexbox";

const color = "#e9e9e9";

const Arrow = (props) => {
  return (
    <Flex {...props}>
      <Box width="100%" backgroundColor={color} />
      <Box
        sx={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "50px 0 50px 86.6px",
          borderColor: `transparent transparent transparent ${color}`,
        }}
      />
    </Flex>
  );
};

export default Arrow;

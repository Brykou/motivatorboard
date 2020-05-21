import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { Box, Flex } from "reflexbox";
import * as Icons from "./Icons";

const Card = ({ name, description, ...otherProps }) => {
  const Icon = Icons[name];
  return (
    <Draggable
      axis="both"
      handle=".card"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[5, 5]}
    >
      <Box
        sx={{
          cursor: "pointer",
          border: "solid 1px lightgray",
          borderRadius: "4px",
          width: "180px",
          height: "180px",
          boxShadow: "0 5px 9px rgba(0,0,0,0.08), 0 5px 9px rgba(0,0,0,.04)",
        }}
        p="16px"
        backgroundColor="white"
        className="card"
        {...otherProps}
      >
        <Flex alignItems="center" mb="16px">
          <Icon width="32px" mr="8px" />
          <Box as="span" fontSize="20px" fontWeight="500">
            {name}
          </Box>
        </Flex>
        <Box fontSize="14px">{description}</Box>
      </Box>
    </Draggable>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

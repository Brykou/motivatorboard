import React from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
import { Box, Flex } from "reflexbox";
import * as Icons from "./Icons";

const Card = ({ name, description, ...otherProps }) => {
  const Icon = Icons[name];
  return (
    <Draggable axis="both" handle=".card" defaultPosition={{ x: 0, y: 0 }} grid={[5, 5]}>
      <Flex
        className="card"
        flexDirection="column"
        alignItems="center"
        backgroundColor="white"
        width="160px"
        height="220px"
        p="16px"
        sx={{
          cursor: "pointer",
          border: "solid 1px lightgray",
          borderRadius: "4px",
          boxShadow: "0 5px 9px rgba(0,0,0,0.08), 0 5px 9px rgba(0,0,0,.04)",
          transition: "box-shadow .2s",
          ":hover": {
            zIndex: 100,
            boxShadow: "0 10px 15px rgba(30,30,30,.1), 0 10px 8px rgba(30,30,30,.1)",
          },
        }}
        {...otherProps}
      >
        <Icon height="32px" mb="8px" />
        <Box fontSize="20px" fontWeight="500" mb="16px">
          {name}
        </Box>
        <Box fontSize="14px">{description}</Box>
      </Flex>
    </Draggable>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;

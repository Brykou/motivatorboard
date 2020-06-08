import React, { useContext } from "react";
import { Flex, Box } from "reflexbox";
import Card from "../components/Card";
import Arrow from "../components/Arrow";
import cards from "../config/cards.json";
import ThemeContext from "../state/Theme";
import { Theme } from "../components/Icons";

export default function Home() {
  const switchTheme = useContext(ThemeContext);
  return (
    <Box as="main" bg="background" minHeight="100vh">
      <Flex flexWrap="wrap" p="16px">
        {cards.map((card) => (
          <Card key={card.name} name={card.name} description={card.description} />
        ))}
      </Flex>
      <Arrow
        sx={{
          position: "absolute",
          right: 0,
          left: 0,
          top: "calc(50% - 50px)",
          zIndex: 1,
        }}
      />
      <Theme
        size="24px"
        color="text"
        sx={{
          cursor: "pointer",
          position: "absolute",
          bottom: "10px",
          left: "10px",
          transition: "transform .2s",
          "&:hover": { transform: "scale(1.1)" },
        }}
        onClick={switchTheme}
      />
    </Box>
  );
}

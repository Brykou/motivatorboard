import React from "react";
import { Flex } from "reflexbox";
import Card from "../components/Card";
import Arrow from "../components/Arrow";
import cards from "../config/cards.json";

export default function Home() {
  return (
    <main>
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
          zIndex: -1,
        }}
      />
    </main>
  );
}

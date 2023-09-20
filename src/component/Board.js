import React, { Fragment, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Container from "./Container";

import { useDrop } from "react-dnd";
const Board = () => {
  const [cards, setCards] = useState([]);
  

  const [ dropRef] = useDrop({
    accept: "CARD",
    drop: (item,monitor) => {
      console.log(monitor.getItem(),"monitored");
      const updatedCard = { ...cards[item.index], status: "COMPLETED" };
      console.log(updatedCard, "updated card");

      const oldCards = cards.filter(
        (card) => card.task !== cards[item.index].task
      );
      console.log(oldCards, "old card");
      setCards([...oldCards, updatedCard]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });
  console.log(cards);

  const todoCards = cards.filter((card) => card.status === "TODO");
  const inProgressCards = cards.filter((card) => card.status === "INPROGRESS");
  const doneCards = cards.filter((card) => card.status === "COMPLETED");

  return (
    <Fragment>
      <Box backgroundPosition="fixed" minHeight="100vh" bgColor="gray.600">
        <Box>
          <Text
            color="#fff"
            textAlign="center"
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight={700}
          >
            Trello Board
          </Text>
        </Box>

        <Flex mt="50px" justifyContent="center" ref={dropRef} gap={2}>
          <Container
            title={"To do"}
            allCards={cards}
            status={"TODO"}
            cards={todoCards}
            setCards={setCards}
          />
          <Container
            title={"In Progress"}
            allCards={cards}
            status={"INPROGRESS"}
            cards={inProgressCards}
            setCards={setCards}
          />
          <Container
            status={"COMPLETED"}
            allCards={cards}
            title={"Completed"}
            cards={doneCards}
            setCards={setCards}
          />
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Board;

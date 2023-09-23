import React, { Fragment, useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Container from "./Container";
import { getTasks } from "../api/BoardService";
import { useDrop } from "react-dnd";
const Board = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      try {
        const response = await getTasks();
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    getAllTasks();
  }, [cards]);

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      const updatedCard = { ...cards[item.index], status: "INPROGRESS" };

      const oldCards = cards.filter(
        (card) => card.task !== cards[item.index].task
      );
      setCards([...oldCards, updatedCard]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

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
            p={10}
          >
            Trello Board
          </Text>
        </Box>

        <Flex
          mt="50px"
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          ref={dropRef}
          gap={4}
          p={10}
        >
          <Container
            title={"To do"}
            allCards={cards}
            status={"TODO"}
            cards={todoCards}
            setCards={setCards}
          />
          <Container
            title={"In Progress"}
            // allCards={cards}
            status={"INPROGRESS"}
            cards={inProgressCards}
            // setCards={setCards}
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
import React, { Fragment } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Container from "../container/container";

const Board = () => {
  return (
    <Fragment>
      <Box
        backgroundPosition="fixed"
        minHeight="100vh"
        bgColor="gray.600" 
      >
        <Box >
          <Text
            color="#fff"
            textAlign="center"
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight={700}
          >
         Trello Board
          </Text>
        </Box>

        <Flex  mt="50px" justifyContent="center" gap={2}>
          <Container title={"To do"} />
          <Container title={"In Progress"} />
          <Container title={"Completed"} />
        </Flex>
      </Box>
    </Fragment>
  );
};

export default Board;

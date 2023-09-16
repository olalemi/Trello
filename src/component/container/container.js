import React, { Fragment, useState } from "react";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import Card from "../card/Card";

const Container = ({ title }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [cards, setCards] = useState([
    { task: "Buy Milk", description: "2 Gallons of milk at the store", isEditing: false }
  ]);

  const handleAddCardClick = () => {
    setIsAddingCard(true);
  };

  const handleCancelClick = () => {
    setIsAddingCard(false);
    setNewTask("");
    setNewDescription("");
  };

  const handleSaveClick = () => {
    // Create a new card with the newTask and newDescription values
    const newCard = { task: newTask, description: newDescription, isEditing: false };

    // Add the new card to the list of cards
    setCards([...cards, newCard]);

    // Clear the input fields and hide the input section
    setNewTask("");
    setNewDescription("");
    setIsAddingCard(false);
  };

  const handleCardClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isEditing = true;
    setCards(updatedCards);
  };

  const handleInputBlur = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isEditing = false;
    setCards(updatedCards);
  };

  return (
    <Fragment>
      <Box borderRadius="5px" bgColor="gray.300">
        <Flex p={3} gap={40} justifyContent="space-between">
          <Box>
            <Text color="#000" fontSize={{ base: "16px" }} fontWeight={700}>
              {title}
            </Text>
          </Box>

          <Box>
            <Text color="#000" fontSize={{ base: "16px" }} fontWeight={400}>
              01/20
            </Text>
          </Box>
        </Flex>

        {cards.map((card, index) => (
          <Box key={index} p={2}>
            {card.isEditing ? (
              <div>
                <Input
                  placeholder="Task"
                  value={card.task}
                  onChange={(e) => {
                    const updatedCards = [...cards];
                    updatedCards[index].task = e.target.value;
                    setCards(updatedCards);
                  }}
                  onBlur={() => handleInputBlur(index)}
                  autoFocus
                />
                <Input
                  placeholder="Description"
                  value={card.description}
                  onChange={(e) => {
                    const updatedCards = [...cards];
                    updatedCards[index].description = e.target.value;
                    setCards(updatedCards);
                  }}
                  onBlur={() => handleInputBlur(index)}
                />
              </div>
            ) : (
              <div onClick={() => handleCardClick(index)}>
                <Card task={card.task} description={card.description} />
              </div>
            )}
          </Box>
        ))}

        {isAddingCard ? (
          <Box p={2}>
            <Input
              placeholder="Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <Button onClick={handleSaveClick} marginRight={2}>
              Save
            </Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </Box>
        ) : (
          <Box p={3}>
            <Button
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: 700
              }}
              onClick={handleAddCardClick}
            >
              Click to add card
            </Button>
          </Box>
        )}
      </Box>
    </Fragment>
  );
};

export default Container;

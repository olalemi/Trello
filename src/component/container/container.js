import React, { Fragment, useState } from "react";
import { Box, Flex, Text, Button, Textarea } from "@chakra-ui/react";
import Card from "../card/Card";

const Container = ({ title }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLabel, setNewlabel] = useState("");
  const [cards, setCards] = useState([]);

  const handleAddCardClick = () => {
    setIsAddingCard(true);
  };

  const handleCancelClick = () => {
    setIsAddingCard(false);
    setNewTask("");
    setNewDescription("");
    setNewlabel("");
  };

  const handleSaveClick = () => {
    // Create a new card with the newTask and newDescription values
    const newCard = {
      task: newTask,
      description: newDescription,
      label: newLabel,
      isEditing: false
    };
    // Add the new card to the list of cards
    setCards([...cards, newCard]);
    // Clear the input fields and hide the input section
    setNewTask("");
    setNewDescription("");
    setNewlabel("");
    setIsAddingCard(false);
  };

  const handleCardClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isEditing = true;
    setCards(updatedCards);
  };

  const handleCardDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
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
            02/10
            </Text>
          </Box>
        </Flex>

        {cards.map((card, index) => (
          <Box key={index} p={2}>
            {card.isEditing ? (
              <Flex direction="column" gap={2}>
                <Flex gap={2}>
                  <Box>
                    <Textarea
                      placeholder="Task"
                      value={card.task}
                      maxW="145px"
                      onChange={(e) => {
                        const updatedCards = [...cards];
                        updatedCards[index].task = e.target.value;
                        setCards(updatedCards);
                      }}
                      onBlur={() => handleInputBlur(index)}
                      style={{ overflowWrap: "break-word" }}
                      rows={1}
                    />
                  </Box>
                  <Box>
                    <Textarea
                      placeholder="Label"
                      value={card.label}
                      onChange={(e) => {
                        const updatedCards = [...cards];
                        updatedCards[index].label = e.target.value;
                        setCards(updatedCards);
                      }}
                      onBlur={() => handleInputBlur(index)}
                      maxW="145px"
                      style={{ overflowWrap: "break-word" }}
                      rows={1}
                    />
                  </Box>
                </Flex>

                <Box>
                  <Textarea
                    placeholder="Description"
                    value={card.description}
                    maxW="300px"
                    onChange={(e) => {
                      const updatedCards = [...cards];
                      updatedCards[index].description = e.target.value;
                      setCards(updatedCards);
                    }}
                    onBlur={() => handleInputBlur(index)}
                    style={{ overflowWrap: "break-word" }}
                    rows={1}
                  />
                </Box>
              </Flex>
            ) : (
              <Box>
                <Flex justifyContent="flex-end">
                  <Box>
                    <Button
                      style={{
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        fontSize: "10px",
                        fontWeight: 700,
                        marginRight: "-10px",
                        color: "#000"
                      }}
                      onClick={handleCardDelete}
                    >
                      x
                    </Button>
                  </Box>
                </Flex>
                <Box marginTop="-30px" onClick={() => handleCardClick(index)}>
                  <Card
                    task={card.task}
                    description={card.description}
                    label={card.label}
                  />
                </Box>
              </Box>
            )}
          </Box>
        ))}

        {isAddingCard ? (
          <Flex direction="column" gap={2} p={2}>
            <Flex direction="row" gap={2}>
              <Box>
                <Textarea
                  placeholder="Task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  maxW="145px"
                  style={{ overflowWrap: "break-word" }}
                  rows={1}
                />
              </Box>

              <Box>
                <Textarea
                  placeholder="Label"
                  value={newLabel}
                  onChange={(e) => setNewlabel(e.target.value)}
                  maxW="145px"
                  style={{ overflowWrap: "break-word" }}
                  rows={1}
                />
              </Box>
            </Flex>
            <Box>
              <Textarea
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                maxW="300px"
                style={{ overflowWrap: "break-word" }}
                rows={1}
              />
            </Box>
            <Box>
              <Button
                bgColor="#5aac44"
                color="#fff"
                onClick={handleSaveClick}
                marginRight={2}
              >
                Add Card
              </Button>
              <Button onClick={handleCancelClick}>Cancel</Button>
            </Box>
          </Flex>
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

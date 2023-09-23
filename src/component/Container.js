import React, { Fragment, useState } from "react";
import { Box, Flex, Text, Button, Textarea } from "@chakra-ui/react";
import DraggableCard from "./DraggableCard";

import { createTask, deleteTask } from "../api/BoardService";

const Container = ({ title, cards, setCards, status, allCards }) => {
  const initialState = {
    isAddingCard: false,
    isEditingCard: false,
    newTask: "",
    newDescription: "",
    newLabel: "",
    newStatus: status
  };

  const [state, setState] = useState(initialState);
  const handleAddCardClick = () => {
    setState({ ...state, isAddingCard: true });
  };

  const handleCancelClick = () => {
    setState(initialState);
    // setNewStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      title: state.newTask,
      eta: state.newLabel,
      description: state.newDescription,
      status: state.newStatus
    };
    const res = await createTask(reqBody);
    if (res.msg.startsWith("success")) {
      setState(initialState);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteTask(id);
    console.log(res);
    if (res === 200) {
    }
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

        {cards.map((card) => {
          const { title, description, eta, _id } = card;

          return (
            <Box key={_id} p={2}>
              <Flex direction="column" gap={2}>
                {!initialState.isEditingCard ? (
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
                          onClick={() => handleDelete(_id)}
                        >
                          x
                        </Button>
                      </Box>
                    </Flex>

                    <Box marginTop="-30px">
                      <DraggableCard key={_id} card={card} />
                    </Box>
                  </Box>
                ) : (
                  <Box key={_id} p={2}>
                    <Flex direction="column" gap={2}>
                      <Flex gap={2}>
                        <Box>
                          <Textarea
                            placeholder="Title"
                            value={title}
                            maxW="145px"
                            onChange={(e) => {
                              // setCards(updatedCards);
                            }}
                            // onBlur={() => handleInputBlur(_id)}
                            style={{ overflowWrap: "break-word" }}
                            rows={1}
                          />
                        </Box>
                        <Box>
                          <Textarea
                            placeholder="Completion Time"
                            value={eta}
                            onChange={(e) => {
                              // setCards(updatedCards);
                            }}
                            // onBlur={() => handleInputBlur(_id)}
                            maxW="145px"
                            style={{ overflowWrap: "break-word" }}
                            rows={1}
                          />
                        </Box>
                      </Flex>
                      <Box>
                        <Textarea
                          placeholder="Description"
                          value={description}
                          maxW="300px"
                          onChange={(e) => {
                            // setCards(updatedCards);
                          }}
                          // onBlur={() => handleInputBlur(_id)}
                          style={{ overflowWrap: "break-word" }}
                          rows={1}
                        />
                      </Box>
                    </Flex>
                  </Box>
                )}
              </Flex>
            </Box>
          );
        })}

        {state.isAddingCard ? (
          <Flex direction="column" gap={2} p={2}>
            <form mb={2} onSubmit={handleSubmit}>
              <Flex direction="column" gap={2}>
                <Flex gap={2}>
                  <Textarea
                    placeholder="Title"
                    fontSize="12px"
                    value={state.newTask}
                    onChange={(e) =>
                      setState({ ...state, newTask: e.target.value })
                    }
                    maxW="145px"
                    style={{ overflowWrap: "break-word" }}
                    rows={1}
                    required
                  />

                  <Textarea
                    placeholder="Completion Time"
                    fontSize="12px"
                    // value={newLabel}
                    onChange={(e) =>
                      setState({ ...state, newLabel: e.target.value })
                    }
                    maxW="145px"
                    style={{ overflowWrap: "break-word" }}
                    rows={1}
                    required
                  />
                </Flex>

                <Box>
                  <Textarea
                    placeholder="Description"
                    fontSize="12px"
                    // value={newDescription}
                    onChange={(e) =>
                      setState({ ...state, newDescription: e.target.value })
                    }
                    maxW="300px"
                    style={{ overflowWrap: "break-word" }}
                    rows={1}
                    required
                  />
                </Box>
              </Flex>
              <Flex direction="column" gap={2} mt={2}>
                <Box>
                  <Button
                    bgColor="#5aac44"
                    color="#fff"
                    // onClick={handleSaveClick}
                    marginRight={2}
                    type="submit"
                  >
                    Add Card
                  </Button>
                  <Button onClick={handleCancelClick}>Cancel</Button>
                </Box>
              </Flex>
            </form>
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

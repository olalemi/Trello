import React from "react";
import { useDrag } from "react-dnd";
import { Box } from "@chakra-ui/react";
import Card from "./Card";

const DraggableCard = ({ card, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { card, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <Box
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      <Card
        task={card.task}
        description={card.description}
        label={card.label}
        status={card.status}
      />
    </Box>
  );
};

export default DraggableCard;

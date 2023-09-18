import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
const Card = ({ task, description,label }) => {
  return (
    <Box borderRadius="5px" bgColor="gray.400" p={3}>
      

      <Flex
        p={5}
        gap={20}
        mt={-4}
        justifyContent="space-between"
        borderBottom="1px solid black"
      >
        <Box>
          <Text color="#000" fontSize={{ base: "16px" }} maxW="150px"fontWeight={700}>
            {task}
          </Text>
        </Box>

        <Box>
          <Text color="#000" fontSize={{ base: "10px" }} maxW="50px" fontWeight={300}>
           {label}
          </Text>
        </Box>
      </Flex>

      <Box p={3}>
        <Text color="#000" fontSize={{ base: "15px" }} maxW="200px" fontWeight={500}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;

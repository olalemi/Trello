import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
const Card = ({task, description}) => {
  return (
    <Box borderRadius="5px" bgColor="gray.400" p={3}>
    <Flex p={2} gap={20} mt={2} justifyContent="space-between" borderBottom="1px solid black" >
      <Box>
        <Text color="#000" fontSize={{ base: "16px" }} fontWeight={700}>
         {task}
        </Text>
      </Box>

      <Box>
        <Text color="#000" fontSize={{ base: "10px" }} fontWeight={700}>
          10 mins
        </Text>
      </Box>
    </Flex>

    <Box p={3}>
      <Text color="#000" fontSize={{ base: "15px" }} fontWeight={500}>
    {description}
      </Text>
    </Box>
  </Box>
  )
}

export default Card
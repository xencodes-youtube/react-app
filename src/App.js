import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";

import { FiLink2 } from "react-icons/fi";

const { Heading } = require("@chakra-ui/layout");
const { Box } = require("@chakra-ui/layout");

function App() {
  return (
    <Box>
      <Box p={12} bgGradient="linear(to-r, purple.400, red.400)">
        <Stack spacing={4}>
          <Heading size="4xl" textColor="white">
            React Application Example
          </Heading>
          <Text fontSize="xl" textColor="white">
            Irure enim occaecat non sunt do culpa minim veniam ut fugiat
            voluptate laborum amet tempor.
          </Text>
        </Stack>
        <Button mt={6} leftIcon={<FiLink2 />}>
          Learn more
        </Button>
      </Box>
    </Box>
  );
}

export default App;

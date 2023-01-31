import React from 'react'
import { Heading ,Text} from '@chakra-ui/react'
export default function Practice() {
  return (<>
    <h1>Hello</h1>
    <h2>World</h2>
    <p>This is a paragraph</p>
    <Heading> Default Heading by Chakra UI</Heading>
    <Heading as="h1"> H1 Heading by Chakra UI</Heading>
    <Text fontWeight={"bold"}>This is text by Chakra UI</Text>
    </>
  )
}

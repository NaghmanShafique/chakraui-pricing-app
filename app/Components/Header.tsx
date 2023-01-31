import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'
export default function Header() {
    return (
        <Box mb={'50px'} >
          <Box as={'section'} textAlign={{base : 'left' , md:'left' , lg: 'center'}} bg={'#6B46C1'} color={'#F7FAFC'} pt={'90px'} pb={'198px'} px={'32px'}>
            <Heading fontWeight={'800'} fontSize={'48px'} >Simple pricing for your business</Heading>
            <Text fontWeight={'500'} fontSize={'24px'} pt={'16px'} >Plans that are carefully crafted to suit your business.</Text>
          </Box>
        </Box>
    )
}

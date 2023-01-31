import { Box , HStack , Icon , Text , Flex} from '@chakra-ui/react'
import React from 'react'
import FeeIcon from '../Icons/FeeIcon'
import MoneyIcon from '../Icons/MoneyIcon'
import SubIcon from '../Icons/SubIcon'

export default function Features() {
  return (
    <Box mt={'57px'} mb={'32px'} maxW={'964px'} mx={'auto'} >
        <Flex direction={{base:'column',md:'column',lg:'row'}}>
         <HStack px={'36px'} spacing={'20px'} mb={'15px'}>
           <Icon as={MoneyIcon} boxSize={'22px'} />
          <Text textAlign={'left'} fontSize={'18px'} fontWeight={'600'}>30 days money back Guarantee</Text>
         </HStack>
         <HStack  px={'36px'} spacing={'20px'} mb={'15px'}>
           <Icon as={FeeIcon}></Icon>
           <Text textAlign={'left'} fontSize={'18px'} fontWeight={'600'}>No setup fees 100% hassle-free</Text>
         </HStack>
         <HStack  px={'36px'} spacing={'20px'} mb={'15px'}>
           <Icon as={SubIcon}></Icon>
           <Text textAlign={'left'} fontSize={'18px'} fontWeight={'600'}>No monthly subscription Pay once and for all</Text>
         </HStack>
       </Flex>
    </Box>
  )
}

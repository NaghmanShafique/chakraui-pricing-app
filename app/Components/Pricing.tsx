import React from 'react'
import { Heading, Text, Box, Button, Flex, HStack ,Icon} from '@chakra-ui/react'
import CheckIcon from '../Icons/CheckIcon'

export default function Pricing() {
    return (
        <Box maxW={'964px'} mx={{base:'20px',md:'20px', lg:'auto'}} mt={'-200px'} bg={'white'} borderRadius={'14px'} overflow={'hidden'} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}>
            <Flex direction={{base:'column',md:'column',lg:'row'}}>
                <Box p={'60px'} bg={'#E9D8FD'} textAlign={'center'}>
                    <Text fontWeight={'800'} fontSize={'24px'} color={'#171923'}>Premium PRO</Text>
                    <Heading as={'h3'} fontWeight={'800'} fontSize={'60px'} color={'#171923'}>$329</Heading>
                    <Text fontWeight={'500'} fontSize={'18px'} mt={'8px'}>billed just once</Text>
                    <Button color={'#F7FAFC'} bg={'#805AD5'} size={'lg'} w={'282px'} mt={'24px'}>Get Started</Button>
                </Box>
                <Box pt={'40px'} pl={'24px'}>
                    <Text mb={'24px'}>Access these features when you get this pricing package for your business.</Text>
                    <HStack mb={'16px'}>
                        <Icon as={CheckIcon}/>
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={'16px'}>
                        <Icon as={CheckIcon}/>
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb={'16px'}>
                        <Icon as={CheckIcon}/>
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb={'16px'}>
                        <Icon as={CheckIcon}/>
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </Box>
            </Flex>
        </Box>

    )
}

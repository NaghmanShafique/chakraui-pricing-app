"use client";
import { ChakraProvider,Heading ,Text} from '@chakra-ui/react'
import Header from './Components/Header';
import Pricing from './Components/Pricing';
import Practice from './Components/practice';
import Features from './Components/Features';

export default function Home() {
  return (
          <ChakraProvider>
            <Header/>
            <Pricing/>
            <Features/>
          </ChakraProvider>
  )    
  
}

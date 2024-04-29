import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/NK logo.png'
import ColorModeSwitch from './ColorModeSwitch'
export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'>
        </Image>
        <ColorModeSwitch/>
    </HStack>
  )
}

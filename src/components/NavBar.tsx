import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/NK logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
export const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'>
        </Image>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

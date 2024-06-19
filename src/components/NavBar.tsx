import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/NK logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props{
  onSearch : (search :string) => void;
}
export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'>
        </Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

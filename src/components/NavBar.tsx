import { HStack, Image ,Text} from '@chakra-ui/react'
import logo from '../assets/NK logo.png'
export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'>

        </Image>
        <Text>NavBar</Text>
    </HStack>
  )
}

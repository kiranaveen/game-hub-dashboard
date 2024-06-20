import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import { SortSelector } from './SortSelector'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

    const heading = `${gameQuery.platform?.name || ''} 
    ${gameQuery.genre?.name || ''} Sort By
    ${gameQuery?.sortOrder || ''}
     Games`

  return (
    <Heading marginY={5} fontSize={'5xl'} as = 'h1'>{heading}</Heading>
)
}

export default GameHeading
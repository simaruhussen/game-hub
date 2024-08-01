import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaAndroid,
    FaLinux,
} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react'
interface props{
    platforms:platform[]
}

const PlatformIconList = ({platforms}:props) => {
    const iconMap:{[key:string]} ={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid,
    }
  return (
    <HStack marginY={1}>
    {platforms.map((platform)=>(

    <Icon as={iconMap[platform.slug]} color="gray.500"/>
    ))}

    </HStack>
    

  )
}


export default PlatformIconList
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { platform } from '../hooks/useGames'
interface props{
  onSelectPlatform: (platform:platform)=>void;
  selectedPlatform:platform|null;
} 
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:props) => {
  const {data,error} =usePlatforms(); 
  if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name||'platforms'}</MenuButton>
        <MenuList>
            {data.map(platform=><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector

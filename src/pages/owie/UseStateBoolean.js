import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

function UseStateBoolean() {
    const [boolean, setBoolean] = useState(true);
  return (
    <div>
        <Button
            colorScheme='blue' 
            onClick={()=>{
                 boolean ? setBoolean(false) : setBoolean(true)
            }}>
            Change Text
        </Button>
        <Text>
            {
                boolean ? "Pogi Ako" :  "Pogi Pogi Ko Talaga"
            }
        </Text>
    </div>
  )
}

export default UseStateBoolean

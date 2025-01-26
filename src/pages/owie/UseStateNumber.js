import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'

function UseStateNumber() {
    const [count, setCount] = useState(1);

    const handleClickAdd = () => {
        setCount(count + 1);
    }

    const handleClickMinus = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>
                Counter: {count}
            </h1>
            <Button colorScheme='green' onClick={handleClickAdd}>+1</Button>
            <Button colorScheme='red' onClick={handleClickMinus}>-1</Button>
        </div>
    )
}

export default UseStateNumber

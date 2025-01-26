import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

function UseStateTimer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1)
        },1000);
    });
    return (
        <div>
            <Text>Rendered {count} times!</Text>
        </div>
    );
}

export default UseStateTimer

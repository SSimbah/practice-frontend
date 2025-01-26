import { Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

let id = 0;

function UseStateArray() {
  const [brand, setBrand] = useState('');
  const [cars, setCars] = useState([]);
  return (
    <div>
      <Input
        placeholder='Input car brand'
        value={brand}
        onChange={e => setBrand(e.target.value)}
      />
      <Button
        colorScheme='purple'
        onClick={() => {
          setCars([
            ...cars,
            { id: id++, brand: brand}
          ])
        }}>Add</Button>
        <Text>Brand List:</Text>
        <ol>
          {cars.map(cars => (
            <li key={cars.id}>{cars.brand}</li>
          ))}
        </ol>
    </div>
  )
}

export default UseStateArray

import { Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

let id = 0;
function UseStateObject() {
    const [car, setCars] = useState({
        brand: "",
        model: "",
        year: "",
        color: ""
    });

    const [carArray, setCarArray] = useState([]);

    const handleInput = (e) => {
        setCars({
            ...car,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddCar = (e) => {
        setCarArray([
            ...carArray,
            {id: id++, brand: car.brand, model: car.model, year: car.year, color: car.color}
        ])
    }
  return (
    <div>
        <Input
        name="brand"
        placeholder='Input car brand'
        value={car.brand}
        onChange={handleInput}
        />
        <Input
        name="model"
        placeholder='Input car model'
        value={car.model}
        onChange={handleInput}
        />
        <Input
        name="year"
        placeholder='Input car year'
        value={car.year}
        onChange={handleInput}
        />
        <Input
        name="color"
        placeholder='Input car color'
        value={car.color}
        onChange={handleInput}
        />
        <Button
            colorScheme='blue'
            onClick={handleAddCar}
        >Add Car</Button>
        <Text>Brand List:</Text>
        <ol>
          {carArray.map(carArray => (
            <li key={carArray.id}>
            Brand: {carArray.brand}, 
            Model: {carArray.model}, 
            Year: {carArray.year},
            Color: {carArray.color}</li>
          ))}
        </ol>
    </div>
  )
}

export default UseStateObject

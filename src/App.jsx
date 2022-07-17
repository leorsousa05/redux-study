import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addTopping } from './pizzaSlice';
import ReducerTodo from './ReducerTodo';
import UsingReducer from './UsingReducer';


function App() {

  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Pizza</h1>

      {pizza.toppings.map(topping => (
        <div key={topping}>{topping}</div>
      ))}
      <button onClick={() => dispatch(addTopping('pepperoni'))}>Add pepperoni</button>

      <div>
        <UsingReducer />
        <ReducerTodo />
      </div>
    </>
  );
}

export default App;

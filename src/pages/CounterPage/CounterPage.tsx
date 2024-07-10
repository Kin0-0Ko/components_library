import React, { FC, useReducer, useState } from 'react';
import './CounterPage.css';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { CounterProps } from '../../Interfaces';
import Panel from '../../components/Panel/Panel';


const reducer = (state: any, actiton: any) => {
	switch (actiton.type) {
		case 'increment':
			return {
				...state,
				count: state.count + 1
			}
		case 'decrement':
			return{
				...state,
				count: state.count - 1
			}
		case 'change':
			return{
				...state,	
				valueToAdd: actiton.payload
			}
		case 'submit':
			return{
				...state,	
				count: state.count + state.valueToAdd,
				valueToAdd: 0
			}
		default: 
			throw new Error('Undefind')
	}
}


const CounterPage: FC<CounterProps> = ({initialCount}) => {
	// const [count, setCount] = useState(initialCount)
	// const [valueToAdd, setValueToAdd] = useState(0)
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0
	}); 

	const increment = () => {
		// setCount(count + 1)
		dispatch({
			type: 'increment'
		})
	}
  
	const decrement = () => {
		// setCount(count - 1)
		dispatch({
			type: 'decrement'
		})

	}
	const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		// const value = parseInt(event.target.value);
		// setValueToAdd(value)
		dispatch({
			type: 'change',
			payload: parseInt(event.target.value) || 0
		})

	}
	const handleSubmit = (event: React.FormEvent) => {
		 event.preventDefault()
		//  setCount(count + valueToAdd)
		//  setValueToAdd(0)
		dispatch({
			type: 'submit',
		})
	}
 
return <Panel className="CounterPage m-3">
    <h1 className="text-lg">Count is {state.count}</h1>
	<div className="flex flex-row">
	<ButtonComponent secondary onClick={increment}>Increase</ButtonComponent>
	<ButtonComponent danger onClick={decrement}>Decrement</ButtonComponent>
		</div> 

		<form onSubmit={handleSubmit}>
				<label htmlFor="">Add a lot!</label>
				<input
				value={state.valueToAdd || ""}
				onChange={handleChange}
				type="number"
				className='p-1 p-3 bg-gray50 border border-gray-300'
				/>
				<ButtonComponent secondary>Add it!</ButtonComponent>

		</form>
  </Panel>
};

export default CounterPage;

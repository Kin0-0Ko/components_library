import { useEffect, useState } from 'react'

export function UseCounter(initialCount: number){
	const [count, setCount] = useState(initialCount)
	
	useEffect(() => {
	
	}, [count])
	
 const handleClick = () => {
	setCount(count + 1)
 }
 return {
	count,
	handleClick
 }
}
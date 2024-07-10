import React, { FC, useEffect, useRef, useState } from 'react';
import './DropDown.css';
import { DropDownItem, DropDownProps } from '../../Interfaces';
import Panel from '../Panel/Panel';


const DropDown: FC<DropDownProps> = ({ options, value, onChange }) => {
	const [isOpen, setIsOpen] = useState(true)
	const divEl = useRef<HTMLInputElement>(null)
	useEffect(() => {
		const handler = (event: any) => {

			if(!divEl.current){
				return
			}

			if (!divEl?.current?.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('click', handler, true)
		return () => {
			document.removeEventListener('click', handler)
		}
	}, [])


	let handelClick = () => {
		setIsOpen(current => !current)
	}
	let handleOpotionClick = (option: DropDownItem) => {
		setIsOpen(false)
		onChange(option)
	}

	return (
		<div ref={divEl} className="DropDown w-48 relative">
			<Panel
				className='flex justify-between items-center cursor-pointer'

				onClick={handelClick}
			>
				{value ? value.label : 'Select...'}
			</Panel>
			{isOpen && <Panel
				className='absolute top-full'
			>{
					options.map(option => {
						return <div
							className='hover:bg-sky-100 rounded cursor-pointer p-1'
							onClick={() => handleOpotionClick(option)}
							key={option.value}
						>
							{option.label}
						</div>
					})
				}</Panel>}
		</div>
	)
};

export default DropDown;

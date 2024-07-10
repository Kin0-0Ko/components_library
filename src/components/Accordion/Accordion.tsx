import React, { FC, useState } from 'react';
import './Accordion.css';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { AccordionProps } from '../../Interfaces'

const Accordion: FC<AccordionProps> = ({ items }) => {
	const [expendedIndex, setExpendedIndex] = useState(0)

	const expendeHandler = (index : number) => {
		setExpendedIndex(current => {
			if(current === index){
				return -1
			}else{
				return index
			}
		})
	};

	return <div className="Accordion">
		{items.map((item, index) => {
			let isExpended = index === expendedIndex;
			return <div
				className='border-x border-t rounded'
				key={item.id}>
				<div
					className='flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => expendeHandler(index)}>
					{item.title}
					<span className='text-2xl'>{isExpended ? <GoChevronDown /> : <GoChevronLeft />}</span>
				</div>
				{isExpended && <div className='border-b p-5'>{item.label}</div>}
			</div>
		})}
	</div>
};

export default Accordion;

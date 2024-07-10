import React, { FC, useState } from 'react';
import './sortableTable.css';
import Table from '../Table/Table';
import { TableProps } from '../../Interfaces';
import { HiMiniArrowSmallDown as ArrowDown, HiMiniArrowSmallUp as ArrowUp } from 'react-icons/hi2';
import UseSort from '../../hooks/UseSort';


const SortableTable: FC<TableProps> = (props) => {


	const {config, data} = props;
	const {sortedData, sortBy, sortOrder, setSortColumn} = UseSort(data, config)
	

	const updateConfig = config.map( column => {
		if (!column.sortValue) {
			return column
		}

		
		return{
			...column,
			header: () => (<th
			className='cursor-pointer hover:bg-gray-100'
			 onClick={() => setSortColumn(column.label)}>
				<div className='flex items-center'>
					{getIcons(column.label, sortBy, sortOrder)}
					 {column.label}
				</div>
			</th>)
		}
	})
	
	

 
return <div>
	<Table {...props} data={sortedData} config={updateConfig}/>
</div> 
};

function getIcons(label: string, sortBy: string | null, sortOrder: string | null){

	if(label !== sortBy){
		return <div>
			<ArrowUp/>
			<ArrowDown/>
			</div>
	}

	if (sortOrder === null) {
		return <div>
		<ArrowUp/>
		<ArrowDown/>
		</div>
		
	}else if(sortOrder === 'asc'){
		return <div>
		<ArrowUp/>
		</div>

	}else if(sortOrder === 'desc'){
		return <div>
		<ArrowDown/>
		</div>
	}

}

export default SortableTable;

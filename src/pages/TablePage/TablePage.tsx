import React, { FC } from 'react';
import './TablePage.css';
import SortableTable from '../../components/sortableTable/sortableTable';

interface TablePageProps {}

const TablePage: FC<TablePageProps> = () => {

	const data = [
		{name: 'Apple', color: 'bg-green-500', score: 3}, 
		{name: 'Orange', color: 'bg-orange-500', score: 51}, 
		{name: 'Strawbarry', color: 'bg-red-500', score: 1}, 
		{name: 'Mango', color: 'bg-yellow-500', score: 5}, 
	]
 
	const config = [

		{
			label: 'Name',
			render: (rowData: any ) => rowData.name,
			sortValue: (fruit: any) => fruit.name

		},
		{
			label: 'Color',
			render: (rowData: any ) => <div className={`p-3 m-2 ${rowData.color}`}></div>,
			sortValue: (fruit: any) => fruit.color
		},
		{
			label: 'Score',
			render: (rowData: any ) => rowData.score,
			sortValue: (fruit: any) => fruit.score,
			header: () => <th className='bg-red-500'>Score</th>
		},


	]
 
 
 return <div className="TablePage">
			<SortableTable data={data} config={config}/>
   </div>
};

export default TablePage;

import React, { FC, Fragment } from 'react';
import './Table.css';
import { TableProps } from '../../Interfaces';


const Table: FC<TableProps> = ({data, config}) => {



return <div className="Table">
    <table className='table-auto border-spacing-2'>
	<thead>
		<tr>
	{config.map(config => {
		if(config.header){
			return <Fragment key={config.label}>{config.header()}</Fragment>
		}else{
			return <th className='border-b-2' key={config.label}>
			{config.label}
		</th>
		}

	})}
	</tr>
	</thead>

		<tbody>
		{data.map(rowData => 
			<tr className='border-b' key={rowData.name}>
				{config.map(column => 
				<td className='p-3' key={column.label}>{column.render(rowData)}</td>
				)
				}

			</tr>
			
			)}

		</tbody>
		
	</table>

  </div>
};

export default Table;

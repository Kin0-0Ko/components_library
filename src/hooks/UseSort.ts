import { useState } from 'react';



export default function UseSort(data: any[], config: any[]) {

	const [sortOrder, setSortOrder] = useState<string | null>(null)
	const [sortBy, setSortBy] = useState<string | null>(null)

	const setSortColumn = (label: string) => {

		if (sortBy) {
			setSortOrder('asc')
			setSortBy(label)
			return
		}

		if (sortOrder === null) {
			setSortOrder('asc')
			setSortBy(label)
		} else if (sortOrder === 'asc') {
			setSortOrder('desc')
			setSortBy(label)
		} else if (sortOrder === 'desc') {
			setSortOrder(null)
			setSortBy(null)

		}
		

	}
	let sortedData = data;

		if (sortBy && sortOrder) {
			const column = config.filter(column => column.label === sortBy)
			const { sortValue } = column[0]

			sortedData = [...data].sort((a, b) => {

				let ValueA = sortValue(a);
				let ValueB = sortValue(b);


				const reversOrder = sortOrder === 'asc' ? 1 : -1;

				if (typeof ValueA === 'string' && typeof ValueB === 'string') {
					return ValueA.localeCompare(ValueB) * reversOrder
				} if (typeof ValueA === 'number' && typeof ValueB === 'number') {
					return (ValueA - ValueB) * reversOrder
				} else {
					return 0
				}

			})
		}
		return{
			sortBy,
			sortOrder,
			sortedData,
			setSortColumn
		}
	}
	

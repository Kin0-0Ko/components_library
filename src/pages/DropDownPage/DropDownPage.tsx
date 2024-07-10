import React, { FC, useState } from 'react';
import { DropDownItem } from '../../Interfaces';
import './DropDownPage.css';
import DropDown from '../../components/DropDown/DropDown';

interface DropDownPageProps {}

const DropDownPage: FC<DropDownPageProps> = () => {
	const [selection, setSelection] = useState<DropDownItem | null>(null)

	const options = [
		{
			label: 'Red',
			value: 'red'
		},
		{
			label: 'Green',
			value: 'green'
		},
		{
			label: 'Blue',
			value: 'blue'
		}
	]

	let handleSlection = (option: DropDownItem) => {
		setSelection(option)
	}

  return <div className="DropDownPage">
    		<DropDown options={options} value={selection} onChange={handleSlection}/>

  </div>
};

export default DropDownPage;

import React, { FC } from 'react';
import './AccordionPage.css';
import Accordion from '../../components/Accordion/Accordion';

interface AccordionPageProps {}

const AccordionPage: FC<AccordionPageProps> = () => {

	const props = [
		{
			id: 1,
			title: 'hi!',
			label: 'Lorem ipsum'
		},
		{
			id: 2,
			title: 'hi!',
			label: 'Lorem ipsum'
		},
		{
			id: 3,
			title: 'hi!',
			label: 'Lorem ipsum'
		}
	]

  return <div className="AccordionPage">
		<Accordion items={props}/>

  </div>
};

export default AccordionPage;

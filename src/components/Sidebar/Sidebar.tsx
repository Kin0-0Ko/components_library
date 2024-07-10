import React, { FC } from 'react';
import './Sidebar.css';
import Link from '../Link/Link';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
 
	const links = [
		{label: 'Dropdown', path: '/drpodown'},
		{label: 'Accordion', path: '/accordion'},
		{label: 'Buttons', path: '/buttons'},
		{label: 'Modal', path: '/Modal'},
		{label: 'Table', path: '/Table'},
		{label: 'Counter', path: '/Counter'}
	]
 
return <div className="Sidebar skicky top-0  flex flex-col items-start">
    {links.map(el => 

		 <Link
		key={el.label}
		to={el.path}
		className='mb-3'
		activeClassName='font-bold border-l-4 border-blue-500 pl-2'
		>{el.label}</Link>
	)}
  </div>
};

export default Sidebar;

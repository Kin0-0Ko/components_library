import React, { FC, useContext } from 'react';
import './Link.css';
import { LinkProps } from '../../Interfaces';
import classNames from 'classnames';
import useNavigation from '../../hooks/useNavigation';


const Link: FC<LinkProps> = ({to, children, className, activeClassName}) => {
 
	const {navigate, currentPath} = useNavigation()

	const handler = ( e: React.MouseEvent) => {
		if (e.metaKey || e.ctrlKey) {
			return
		}
		e.preventDefault();
		navigate(to);
	};

	const classes = classNames(
	'text-blue-500',
	className,
	currentPath === to && activeClassName
	  )
 
 return <a className={classes} href={to} onClick={handler}>{children}</a>
};

export default Link;

import React, { FC, useCallback, useEffect } from 'react';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';
import './ButtonComponent.css';
import {ButtonProps} from './../../Interfaces'

const ButtonComponent: FC<ButtonProps> = ({children, primary, outline, rounded, danger, secondary, success, warning, ...rest }) => {

	const ValidationProps = useCallback(() => {	
		const count =
		Number(!!primary) +
		Number(!!success) +
		Number(!!danger) +
		Number(!!secondary) +
		Number(!!warning)

		if(count > 1) {
			console.error(new Error("Only one of variation props can be choosen"))
		}
	}, [])
	
	useEffect(() => {
	  ValidationProps();
	
	  
	}, [ValidationProps])

	const finalClassName =twMerge(className(
		rest.className,
		"flex items-center px-3 py-1.5 border",
		{
		  "border-blue-500 bg-blue-500": primary,
		  "border-gray-900 bg-gray-900": secondary,
		  "border-green-500 bg-green-500": success,
		  "border-yellow-400 bg-yellow-400": warning,
		  "border-red-500 bg-red-500": danger,
		  "rounded-full": rounded,
		  "text-white": !outline && (primary || secondary || success || warning || danger),
		  "bg-white": outline,
		  "text-blue-500": outline && primary,
		  "text-gray-500": outline && secondary,
		  "text-green-500": outline && success,
		  "text-yellow-500": outline && warning,
		  "text-red-500": outline && danger,
		}
	  ))

	

  return <button {...rest} className={finalClassName}>{children}</button>
};

export default ButtonComponent;

import React, { FC, useEffect } from 'react';
import './Modal.css';
import { ModalProps} from '../../Interfaces';
import ReactDOM from 'react-dom';



const Modal: FC<ModalProps> = ({onClose, children, actionBar}) => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden')
	  return () => {
		document.body.classList.remove('overflow-hidden')
	  }
	}, [])
	

	const portalDiv = document.querySelector('.modal-container')!;

	return ReactDOM.createPortal(
		<div>
		<div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
		<div className='fixed inset-40 p-10 bg-white '>
			<div className='flex flex-col justify-between h-full'>
			{children}
			<div className="flex justify-end">
			{actionBar}
			</div>
			</div>
		
			
		</div>
  		</div>,
		portalDiv)
};

export default Modal;

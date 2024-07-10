import React, { FC, useState } from 'react';
import './ModalPage.css';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/ButtonComponent/ButtonComponent';


interface ModalPageProps {}

const ModalPage: FC<ModalPageProps> = () => {

	const [showModal, setshowModal] = useState(false);	

	const handleClick = () => {
		setshowModal(true)
	}

	const handleClose = () => {
		setshowModal(false)
	}

	const modal = <Modal onClose={handleClose} actionBar={<Button onClick={handleClose} primary>OK</Button>}>
		<p>Little Masage</p>
	</Modal>

 return <div className="ModalPage">
	<Button primary onClick={handleClick}> Opent Modal</Button>
    {showModal && modal}
  </div>
};

export default ModalPage;

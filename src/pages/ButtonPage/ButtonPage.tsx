import React, { FC } from 'react';
import './ButtonPage.css';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

interface ButtonPageProps {}

const ButtonPage: FC<ButtonPageProps> = () => (
  <div className="ButtonPage">
		<ButtonComponent
		success
		rounded
		outline
		>
		Click
		</ButtonComponent>
		<ButtonComponent
		secondary
		rounded
		outline
		>
		Click
		</ButtonComponent>
		<ButtonComponent
		warning
		rounded
		outline
		>
		Click
		</ButtonComponent>
		<ButtonComponent
		danger
		rounded
		outline
		>
		Click
		</ButtonComponent>
  </div>
);

export default ButtonPage;

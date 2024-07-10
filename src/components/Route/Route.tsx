import { FC } from 'react';
import './Route.css';
import useNavigation from '../../hooks/useNavigation';
import { RouteProps } from '../../Interfaces';



const Route: FC<RouteProps> = ({path, children}) => {

	const {currentPath} = useNavigation()


	if (path === currentPath) {
		return children	
	}
		return null
};

export default Route;

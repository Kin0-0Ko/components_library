import { useContext } from 'react'
import NavigationContext from '../context/Navigation'
import { NavigationContextInterface } from '../Interfaces'


const useNavigation = () => {
	return useContext(NavigationContext) as NavigationContextInterface

}

export default useNavigation
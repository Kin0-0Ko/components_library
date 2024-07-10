import { FC, createContext, useEffect, useState } from 'react';
import {NavigationContextInterface, NavigationProviderProps} from '../Interfaces'

const NavigationContext = createContext<NavigationContextInterface | null>(null)

const NavigationProvider : FC<NavigationProviderProps> = ({children}) => {

	const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
	useEffect(() => {
	  const handler = () => {
		setCurrentPath(window.location.pathname)
	  }
	  
	  window.addEventListener('popstate', handler)

	  return () => {
		window.removeEventListener('popstate', handler)
	  }
	}, [])

	const navigate = (to: string) => {
		window.history.pushState({}, '',  to)
		setCurrentPath(to)
	}
	

	return <NavigationContext.Provider value={{ currentPath, navigate}}>
		{children}
	</NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext
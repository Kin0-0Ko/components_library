import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Route from './components/Route/Route';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import ButtonPage from './pages/ButtonPage/ButtonPage';
import DropDownPage from './pages/DropDownPage/DropDownPage';
import ModalPage from './pages/ModalPage/ModalPage';
import TablePage from './pages/TablePage/TablePage';
import CounterPage from './pages/CounterPage/CounterPage';


function App() {



  return (
    <div className="App container mx-auto grid grid-cols-6 gap-4 mt-4">
		<Sidebar/>
		<div className='col-span-5'>
			<Route path='/accordion'>
				<AccordionPage/>
			</Route>
			<Route path='/drpodown'>
				<DropDownPage/>
			</Route>
			<Route path='/buttons'>
				<ButtonPage/>
			</Route>
			<Route path='/Modal'>
				<ModalPage/>
			</Route>
			<Route path='/Table'>
				<TablePage/>
			</Route>
			<Route path='/CounterPage'>
				<CounterPage initialCount={1}/>
			</Route>
		</div>
    </div>
  );
} 

export default App;

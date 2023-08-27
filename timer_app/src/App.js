import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Item from './components/Item';
import AddItem from './pages/addItem';

function App() {
	//state: itemName, countdown✅
	//passes down itemName and countdown to Item component✅
	//passes down setItemName and setCountdown to AddItem component✅
	//renders Item and countdown
	let [itemName, setItemName] = useState('');
    let [items, setItems] = useState([])
	return (
		// <div>
		//     <AddItem setItemName={setItemName} />
		//     <Item itemName={itemName} />
		// </div>
		<Routes>
			<Route
				path='/'
				element={
					<Homepage
						// setItemName={setItemName}
						itemName={itemName}
                        items={items}
					/>
				}
			/>
			<Route path='/addItem'
                element={
                <AddItem 
                    setItemName={setItemName}
                    items={items}
                    setItems={setItems}
                    itemName={itemName}
                    />
                }
            />
		</Routes>
	);
}

export default function Root() {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
}
//next steps: set up react router so when add button is clicked user navigates to add-item page
//add 'Add' button that navigates back to home and renders Item component as a list

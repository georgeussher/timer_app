import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import AddItem from './pages/AddItem.1';

function App() {
	//STATE:
	let [itemName, setItemName] = useState('');
	let [items, setItems] = useState([]);
	//Countdown state:
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(0);

	return (
		<Routes>
			<Route
				path='/'
				element={<Homepage itemName={itemName} items={items} />}
			/>
			<Route
				path='/addItem'
				element={
					<AddItem
						items={items}
						setItems={setItems}
						itemName={itemName}
						setItemName={setItemName}
						hours={hours}
						SetHours={setHours}
						minute={minutes}
						setMinutes={setMinutes}
						seconds={seconds}
						setSeconds={setSeconds}
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
//next steps: set up react router so when add button is clicked user navigates to add-item page✅
//add 'Add' button that navigates back to home and renders Item component as a list✅
//add timer functionality to Item component
//render countdown timer in homepage according to parameters set in Item (state?)
//order list according to timer length (shortest at the top)
//render totat time at top of homepage
//when timer ends make sound
//be able to delete items from list
//stop timer when item is deleted

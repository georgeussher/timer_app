import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import AddItem from './pages/AddItem.1';

function App() {
	//STATE:
	 let [itemName, setItemName] = useState('');
	// let [items, setItems] = useState([]);//delete and replace with itemsArray
	let [itemsArray, setItemsArray] = useState([]); //array of objects
	//Countdown state:
	let [hours, setHours] = useState(0);
	let [minutes, setMinutes] = useState(0);
	let [seconds, setSeconds] = useState(0);
	 let [timeValue, setTimeValue] = useState('');	//stores the hourValue joined from hourValuesArray


	//could logic for countdown functionality live here? And be passsed down as props...

	return (
		
		<Routes>
			<Route
				path='/'
				element={<Homepage itemsArray={itemsArray} />}
			/>
			<Route
				path='/addItem'
				element={
					<AddItem
						itemsArray={itemsArray}
						setItemsArray={setItemsArray}
						// items={items}
						// setItems={setItems}
						itemName={itemName}
						setItemName={setItemName}
						timeValue={timeValue}
						setTimeValue={setTimeValue}
						hours={hours}
						setHours={setHours}
						minutes={minutes}
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

//THE BIGGER PICTURE:
//next steps: set up react router so when add button is clicked user navigates to add-item page✅
//add 'Add' button that navigates back to home and renders Item component as a list✅
//add timer functionality to Item component (in progress)
//render countdown timer in homepage according to parameters set in Item (state?)
//order list according to timer length (shortest at the top)
//render total time at top of homepage
//when timer ends make sound
//full CRUD functionality
//stop timer when item is deleted

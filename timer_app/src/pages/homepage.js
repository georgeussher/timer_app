import { Link } from 'react-router-dom';
import React, {  useEffect } from 'react';
import Item from '../components/Item';

//home page: renders list of items and active countdowns
export default function Homepage({ itemsArray }) {

	//retrieves updatedseconds from storage and logs to console
	useEffect(() => {
		const storedTimers = JSON.parse(localStorage.getItem('updatedSeconds'))
		console.log('storedTimers',storedTimers)
	}, [])

	console.log('itemsArray in homepage', itemsArray);
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<h1>{itemsArray.hours}</h1>
			<ul>
				{/* array of items is mapped into Item component and rendered */}
				{itemsArray.map((userData) => (
					//map through the countdown object and pass in each value as a prop to the Countdown component
					<li key={userData.id}>
						{
							<Item
								itemName={userData.name}
								hours={userData.hours}
								minutes={userData.minutes}
								seconds={userData.seconds}
								// updateHours={updatedHours}
								// setUpdatedHours={setUpdatedHours} 
								// updatedMinutes={updatedMinutes}
								// setUpdatedMinutes={setUpdatedMinutes}
								// updatedSeconds={updatedSeconds}
								// setUpdatedSeconds={setUpdatedSeconds}
							/>
						}
					</li>
				))}
			</ul>
		</>
	);
}

//import { useState, useEffect } from 'react';
//Countdown timer logic rendered inside Item component
//PLAN: save time as state variable to be changed in the add-item component


export default function Countdown({ hours, minutes, seconds }) {
	//convert hours, minutes and seconds from string to integer
	const convertedHours = parseInt(hours, 10);
	const convertedMinutes = parseInt(minutes, 10);
	const convertedSeconds = parseInt(seconds, 10);

	//COUNTDOWN LOGIC HERE
	
		var durationInMilliseconds = (convertedHours * 3600 + convertedMinutes * 60 + convertedSeconds) * 1000;
		
		setInterval(() => {
			
			const updatedHours = Math.floor(durationInMilliseconds / (1000 * 60 * 60));
			const updatedMinutes = Math.floor((durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
			const updatedSeconds = Math.floor((durationInMilliseconds % (1000 * 60)) / 1000);
	
			durationInMilliseconds -= 1000;
	
			console.log(updatedHours, ":", updatedMinutes, ":", updatedSeconds)
	
		}, 1000);

	
	//const currentDate = new Date();
	//convert hours, minutes and seconds into milliseconds and combine into one number
	//const targetDate = new Date(currentDate.getTime() + durationInMilliseconds)
	//console.log(targetDate)


	
		
			


	//on routing to homepage, timer function called, taking in hours, minutes and seconds as arguments
	return (
		<div>
			<h2>
			{/* rendering the live dynamic countdown after converting to a string */}
				{String(hours).padStart(2, '0')}:{String(minutes).padStart(
				2,
				'0'
			)}:{String(seconds).padStart(2, '0')}
			</h2>
		</div>
	);
}

//add logic to count down from a set value
//render live countdown in return statement
//add logic to update the countdown start value according to the this.state.

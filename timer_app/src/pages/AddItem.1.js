import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AddItem({
	items,
	setItems,
	itemName,
	setItemName,
	hours,
	setHours,
	minutes,
	setMinutes,
	seconds,
	setSeconds,
}) {
	//props: setItemName, setCoundown
	//contains input field for item name whose value is passsed into setItemName
	//contains timer wheel whose value is assigned to setCountdown

	//State for hour values (2), stored in an array:
	let [hourValuesArray, setHourValuesArray] = useState([]);

	//updates itemName state when input field is typed in
	const handleInputChange = (event) => {
		setItemName(event.target.value);
	};

	//NEXT STEPS:
	//track number of number of numberpad button clicks [number of clicks = array.length??]
	//create if statement that checks how many times the buttons have been clicked
	//if array.lenght === true {function A} else {function B}
	//and sets true false value accordingly so that one of two different buttonCLick
	//functions are called depending on the value of the boolean.
	//can I create only one funtion for each boolean value that handles hours, minutes
	//and seconds? Or do I need to create a function for each?

	//adds item to items array and clears input field
	const handleClick = () => {
		// Check if itemName is not empty or only whitespace
		setItems([...items, itemName]);
		setItemName('');
	};

	//logic for when number button is clicked (function A)
	const handleButtonClick = (event, value) => {
		event.preventDefault(); //prevents default button behaviour
		setHours(value); //changes hours value to equal value of button
		setHourValuesArray([...hourValuesArray, value]); //value is added to the hourValuesArray on click
		console.log('Hours', value);
	};

	//console logs the hourValuesArray when it is updated to aid debugging and build
	useEffect(() => {
		console.log('hourValuesArray', hourValuesArray);
		// You can perform further actions or logic with hourValuesArray here
	}, [hourValuesArray]);

	//returns true if input field is empty or only whitespace else false
	let isEmpty = itemName.trim() === '';

	//array to store button titles and values to be mapped through and rendered
	const buttons = [
		{
			title: '1',
			value: 1,
		},
		{
			title: '2',
			value: 2,
		},
		{
			title: '3',
			value: 3,
		},
		{
			title: '4',
			value: 4,
		},
		{
			title: '5',
			value: 5,
		},
		{
			title: '6',
			value: 6,
		},
		{
			title: '7',
			value: 7,
		},
		{
			title: '8',
			value: 8,
		},
		{
			title: '9',
			value: 9,
		},
		{
			title: '0',
			value: 0,
		},
	];

	return (
		<>
			<div>
				<input type='text' onChange={handleInputChange} />
				{buttons.map(({ title, value: buttonValue }) => {
					return (
						<button
							key={title}
							onClick={(event) => handleButtonClick(event, buttonValue)}
						>
							{title}
						</button>
					);
				})}
				<h2>{hours}</h2>
			</div>
			<Link to='/' aria-label='adds item and switch to homepage'>
				<button onClick={handleClick} disabled={isEmpty}>
					Add
				</button>
			</Link>
		</>
	);
}

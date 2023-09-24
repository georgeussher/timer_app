import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AddItem({
	items,
	setItems,
	itemName,
	setItemName,
	hours,
	hourValue,
	setHourValue,
	setHours,
	minutes,
	setMinutes,
	seconds,
	setSeconds,
}) {
	//NEXT STEPS:
	//track number of number of numberpad button clicks ✅
	//create if statement that checks how many times the buttons have been clicked✅
	//logic in function A&B to choose which time value state to change (hours, minutes or seconds)
	//if button click count = 0-2 > add to hourValuesArray
	//if button click count = 3&4 > add to minuteValuesArray
	//if button click count = 5&6 > add to secondValuesArray

	//STATE:
	let [hourValuesArray, setHourValuesArray] = useState([]);//State for hour values (2), stored in an array:
	let [buttonClickCount, setButtonClickCount] = useState(0);//stores number of times keypad has been clicked

	//updates itemName state when input field is typed in
	const handleInputChange = (event) => {
		setItemName(event.target.value);
	};

	//if buttonClickCount is odd then isCountOdd is true else false
	let isCountOdd = buttonClickCount % 2 === 0 ? true : false;

	//adds item to items array and clears input field
	const handleClick = () => {
		// Check if itemName is not empty or only whitespace
		setItems([...items, itemName]);
		setItemName('');
	};

	//logic for when number button is clicked (function A)
	const handleButtonClick = (event, value) => {
		event.preventDefault(); //prevents default button behaviour
		if (isCountOdd) {
			addToArray(value);
		} else {
			addAndJoinArray(value);
		}
	};

	//buttonclick count === odd
	function addToArray(value) {
		setHours(value); //changes hours value to equal value of button
		setHourValuesArray([...hourValuesArray, value]); //value is added to the hourValuesArray on click
		setButtonClickCount(buttonClickCount + 1); //buttonClickCount is incremented by 1 on click
	}

	//buttonclick count === even
	function addAndJoinArray(value) {
		setHours(value); //changes hours value to equal value of button
		setHourValuesArray([...hourValuesArray, value]); //value is added to the hourValuesArray on click
		setButtonClickCount(buttonClickCount + 1); //buttonClickCount is incremented by 1 on click
	}

	//joins hourValuesArray into a string and sets hourValue state to equal the string
	useEffect(() => {
		console.log('hourValuesArray', hourValuesArray);
		console.log('hourValue', hourValue);
		setHourValue(hourValuesArray.join(''));
	}, [hourValuesArray, buttonClickCount, hourValue, setHourValue]);

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
				<h2>{hourValue}</h2>
			</div>
			<Link to='/' aria-label='adds item and switch to homepage'>
				<button onClick={handleClick} disabled={isEmpty}>
					Add
				</button>
			</Link>
		</>
	);
}

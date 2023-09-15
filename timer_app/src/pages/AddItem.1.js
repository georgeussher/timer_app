import { Link } from 'react-router-dom';


export default function AddItem({ items, setItems, itemName, setItemName, hours, setHours, minutes, setMinutes, seconds, setSeconds }) {
	//props: setItemName, setCoundown
	//contains input field for item name whose value is passsed into setItemName
	//contains timer wheel whose value is assigned to setCountdown
	//updates itemName state when input field is changed
	const handleInputChange = (event) => {
		setItemName(event.target.value);
	};

	//adds item to items array and clears input field
	const handleClick = () => {
		// Check if itemName is not empty or only whitespace
		setItems([...items, itemName]);
		setItemName('');
	};

	//returns true if input field is empty or only whitespace else false
	let isEmpty = itemName.trim() === '';

	//array to store button titles and values to be mapped through and rendered
	const buttons = [
		{
			title: "1",
			value: 1
		},
		{
			title: "2",
			value: 2
		},
		{
			title: "3",
			value: 3
		},
		{
			title: "4",
			value: 4
		},
		{
			title: "5",
			value: 5
		},
		{
			title: "6",
			value: 6
		},
		{
			title: "7",
			value: 7
		},
		{
			title: "8",
			value: 8
		},
		{
			title: "9",
			value: 9
		},
		{
			title: "0",
			value: 0
		},
	]
	//create handleclick function:
	//change state for appropriate countdown value to current value
	//render value in JSX

	return (
		<>
			<div>
				<input type='text' onChange={handleInputChange} />
				{buttons.map(({title}) => {
                return (
                    <button key={title}>{title}</button>
                )
            })}
				
			</div>
			<Link to='/' aria-label='add item and switch to homepage'>
				<button onClick={handleClick} disabled={isEmpty}>
					Add
				</button>
			</Link>
		</>
	);
}

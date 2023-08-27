import { Link } from 'react-router-dom';

export default function AddItem({ setItemName, items, setItems, itemName }) {
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
    }

    //returns true if input field is empty or only whitespace else false
    let isEmpty = itemName.trim() === '';


	return (
		<>
			<div>
				<input type='text' onChange={handleInputChange} />
			</div>
			<Link to='/' aria-label='add item and switch to homepage'>
				<button onClick={handleClick} disabled={isEmpty}>
					Add
				</button>
			</Link>
		</>
	);
}

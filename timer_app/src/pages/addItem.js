import { Link } from 'react-router-dom';

export default function AddItem({ setItemName, items, setItems, itemName }) {
	//props: setItemName, setCoundown
	//contains input field for item name whose value is passsed into setItemName
	//contains timer wheel whose value is assigned to setCountdown

	const handleInputChange = (event) => {
		setItemName(event.target.value);
	};

    const handleClick = () => {
            setItems([...items, itemName]);
            setItemName('');
    }

    const isTextEmpty = (text) => {
        return text.trim() === '';
    }

	return (
		<>
			<div>
				<input type='text' onChange={handleInputChange} />
			</div>
			<Link to='/' aria-label='add item and switch to homepage'>
				<button onClick={handleClick} disabled={isTextEmpty}>Add</button>
			</Link>
		</>
	);
}

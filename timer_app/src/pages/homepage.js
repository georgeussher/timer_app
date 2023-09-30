import { Link } from 'react-router-dom';
import Item from '../components/Item';


//home page: renders list of items and active countdowns
export default function Homepage({ itemName, items, hours, timeValue }) {
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<ul>
				{/* array of items is mapped into Item component and rendered */}
				{items.map((itemName) => (
					//map through the countdown object and pass in each value as a prop to the Countdown component
					<li key={items.indexOf(itemName)}>{<Item itemName={itemName} hours={hours} timeValue={timeValue} />}</li>
				))}
			</ul>
		</>
	);
}

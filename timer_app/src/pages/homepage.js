import { Link } from 'react-router-dom';
import Item from '../components/Item';


//home page: renders list of items and active countdowns
export default function Homepage({ itemName, items, hours, hourValue }) {
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<ul>
				{/* array of items is mapped into Item component and rendered */}
				{items.map((itemName) => (
					<li key={items.indexOf(itemName)}>{<Item itemName={itemName} hours={hours} hourValue={hourValue} />}</li>
				))}
			</ul>
		</>
	);
}

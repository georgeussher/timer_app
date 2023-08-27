import { Link } from 'react-router-dom';
import Item from '../components/Item';

//checks if the items array has updated
export default function Homepage({ itemName, items }) {
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<ul>
				{/* array of items is mapped into Item component and rendered */}
				{items.map((itemName) => (
					<li key={items.indexOf(itemName)}>{<Item itemName={itemName} />}</li>
				))}
			</ul>
		</>
	);
}

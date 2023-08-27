import { Link } from 'react-router-dom';
import Item from '../components/Item';

export default function Homepage({ itemName }) {
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<Item itemName={itemName} />
		</>
	);
}

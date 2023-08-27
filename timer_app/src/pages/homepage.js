import { Link } from 'react-router-dom';
import Item from '../components/Item';

//checks if the items array has updated
export default function Homepage({ itemName, items }) {
	function handleClick() {
		console.log('items after + clicked', items);
	}
	//map through the items array and pass each item into the Item component as a prop and render it as a list in homepage

	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button onClick={handleClick}>+</button>
			</Link>
			<ul>
      {/* array of items is mapped into Item component and rendered */}
				{items.map((itemName) => (
					<li key={items.indexOf(itemName)}>
            {<Item itemName={itemName} />}
          </li>
				))}
			</ul>
		</>
	);
}

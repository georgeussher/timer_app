import { Link } from 'react-router-dom';
import Item from '../components/Item';

//home page: renders list of items and active countdowns
export default function Homepage({ itemsArray }) {
	console.log('itemsArray in homepage', itemsArray);
	return (
		<>
			<Link to='/additem' aria-label='Switch to add item page'>
				<button>+</button>
			</Link>
			<h1>{itemsArray.hours}</h1>
			<ul>
				{/* array of items is mapped into Item component and rendered */}
				{itemsArray.map((userData) => (
					//map through the countdown object and pass in each value as a prop to the Countdown component
					<li key={userData.id}>
						{
							<Item
								itemName={userData.name}
								hours={userData.hours}
								minutes={userData.minutes}
								seconds={userData.seconds}
							/>
						}
					</li>
				))}
			</ul>
		</>
	);
}

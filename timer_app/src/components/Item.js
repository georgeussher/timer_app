import Countdown from './Countdown';

export default function Item({ itemName, hours, minutes, seconds }) {
	//props: itemName, hours, minutes, seconds
	// renders itemName and countdown in list format
	return (
		<div>
			<h1>{itemName}</h1>
			<Countdown hours={hours} minutes={minutes} seconds={seconds} />
		</div>
	);
}

import Countdown from "./Countdown";

export default function Item({ itemName, hours, hourValue }) {
	//props: itemName, countdown
	// renders itemName and countdown in aesthetically pleasing way
	return (
		<div>
			<h1>{itemName}</h1>
			<Countdown hours={hours} hourValue={hourValue}/>
		</div>
	);
}

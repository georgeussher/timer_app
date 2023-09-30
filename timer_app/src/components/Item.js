import Countdown from "./Countdown";

export default function Item({ itemName, hours, timeValue }) {
	//props: itemName, countdown
	// renders itemName and countdown in aesthetically pleasing way
	return (
		<div>
			<h1>{itemName}</h1>
			<Countdown hours={hours} timeValue={timeValue}/>
		</div>
	);
}

import Countdown from "./Countdown";

export default function Item({ itemName, hours, minutes, seconds  }) {
	//props: itemName, countdown
	// renders itemName and countdown in aesthetically pleasing way
	return (
		<div>
			<h1>{itemName}</h1>
			<Countdown hours={hours} minutes={minutes} seconds={seconds}/>
		</div>
	);
}

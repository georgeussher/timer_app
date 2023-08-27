import { Link } from 'react-router-dom';

export default function Homepage() {
	return (
		<Link to='/additem' aria-label='Switch to add item page'>
			<button>+</button>
		</Link>
	);
}

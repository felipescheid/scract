import { useState } from "react";

import { Button } from "./button";

export function App() {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => setCount(count + 1);

	return (
		<div>
			<p>
			Welcome to Scract! This UI has been rendered by React. We now have Parcel bundling files for us - there is one script that calls the React DOM rendering function and two other scripts for the app itself and the button component.
			</p>

			<p style={{ color: "darkblue" }}>Count is {count}</p>
			<Button onClick={handleButtonClick} />
		</div>
	);
};
		

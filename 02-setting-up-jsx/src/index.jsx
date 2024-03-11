function Button({onClick}) {

	return <button onClick={onClick}>Click me!</button>;
}


function App() {
	const [count, setCount] = React.useState(0);

	const handleButtonClick = () => setCount(count + 1);

	return (
	<div>
		<p>
			Welcome to Scract! This UI has been rendered by React - check the source files for details! Click the button below to increment the count.
		</p>
		<Button onClick={handleButtonClick} />
		<p>
			<i>Count is {count}</i>
		</p>
	</div>
	);
};

const domNode = document.getElementById("root");

const root = ReactDOM.createRoot(domNode);

root.render(<App />);

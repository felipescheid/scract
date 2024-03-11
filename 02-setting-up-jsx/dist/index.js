function Button({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick
  }, "Click me!");
}
function App() {
  const [count, setCount] = React.useState(0);
  const handleButtonClick = () => setCount(count + 1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Welcome to Scract! This UI has been rendered by React - check the source files for details! Click the button below to increment the count."), /*#__PURE__*/React.createElement(Button, {
    onClick: handleButtonClick
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Count is ", count)));
}
;
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render( /*#__PURE__*/React.createElement(App, null));

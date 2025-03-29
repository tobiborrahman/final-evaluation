// Response 2: executing by a function
function createAndConfigureElement(tag, attributes) {
	const element = document.createElement(tag);
	for (const [key, value] of Object.entries(attributes)) {
		element.setAttribute(key, value);
	}
	return element;
}

const newHiddenInput = createAndConfigureElement('input', {
	type: 'hidden',
	name: 'test',
	value: 'single element example with function',
});
console.log(newHiddenInput.outerHTML);

// Log result: <input type="hidden" name="test" value="single element example with function">

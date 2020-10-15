'use strict'
// custom element attributes
const customTextFieldAttributes = [
	{
		type: 'text',
		name: 'name',
		validation: '[a-z]+$',
		placeholder: 'Please enter name'
	},
	{
		type: 'number',
		name: 'phone',
		validation: '[0-9]+$',
		placeholder: 'Please enter phone number'
	},
	{
		type: 'text',
		name: 'subject',
		placeholder: 'Please enter message'
	}
];

const customElementsAttributes = {
	form: {
		id: 'form',
		method: 'POST',
		action: '/script.php'
	},
	textfields: customTextFieldAttributes,
	button: {
		type: 'button',
		value: 'Send'
	}
};

// append form to form-wrapper div
let formElement = document.createElement("real-digital-form");
formElement.setAttribute('id', customElementsAttributes.form.id);
formElement.setAttribute('method', customElementsAttributes.form.method);
formElement.setAttribute('action', customElementsAttributes.form.action);
document.getElementById('form-wrapper').appendChild(formElement);

// append textfields to form
for (let element of customElementsAttributes.textfields) {
	let textElement = document.createElement("real-digital-textfield");
	textElement.setAttribute('type', element.type);
	textElement.setAttribute('name', element.name);
	if (element.validation) {
		textElement.setAttribute('validation', element.validation);
	}
	document.getElementById('form').appendChild(textElement);
}

// append button to form
let buttonElement = document.createElement("real-digital-button");
buttonElement.setAttribute('type', customElementsAttributes.button.type);
buttonElement.setAttribute('value', customElementsAttributes.button.value);
document.getElementById('form').appendChild(buttonElement);

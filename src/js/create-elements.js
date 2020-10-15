// create: form
class RealDigitalForm extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('real-digital-form', RealDigitalForm);

// create: textfield
class RealDigitalTextfield extends HTMLElement {
    constructor(...args) {
        super(...args);
    }

    connectedCallback() {
        // Attaches a shadow root to custom element.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Defines the "real" input element attributes.
        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', this.getAttribute('type'));
        inputElement.setAttribute('name', this.getAttribute('name'));
        inputElement.setAttribute('validation', this.getAttribute('validation'));
        inputElement.setAttribute('value', this.getAttribute('value') || '');

        // Appends the input into the shadow root.
        shadowRoot.appendChild(inputElement);
    }
};
customElements.define('real-digital-textfield', RealDigitalTextfield);

// create: button
class RealDigitalButton extends HTMLElement {
    constructor(...args) {
        super(...args);
    }

    connectedCallback() {
        // Attaches a shadow root to custom button.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Defines the "real" input element attributes.
        let buttonElement = document.createElement('input');
        buttonElement.setAttribute('type', this.getAttribute('type'));
        buttonElement.setAttribute('value', this.getAttribute('value'));

        // Appends the button into the shadow root.
        shadowRoot.appendChild(buttonElement);
    }
};
customElements.define('real-digital-button', RealDigitalButton);
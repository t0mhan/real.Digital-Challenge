let button = document.querySelector("real-digital-button");
button.addEventListener("click", () => {
    const formWrapper = document.getElementById('form-wrapper');
    const inputNodes = formWrapper.getElementsByTagName('real-digital-textfield');
    let errors = {};
    let payload = {};

    for (var i = 0; i < inputNodes.length; ++i) {
        const inputNode = inputNodes[i];

        // get attributes
        const type = inputNode.getAttribute('type');
        const name = inputNode.getAttribute('name');
        const regExp = inputNode.getAttribute('validation');
        const value = inputNode.shadowRoot.querySelector('input').value;

        // validate input
        if (regExp && !validateData(value, regExp)) {
            // setting error message
            const errorMessage = name === 'phone' ? 'Please enter valid phone number' : 'Please enter valid name';
            errors = {
                value,
                message: errorMessage
            };
            break;
        }

        // prepare payload
        payload[name] = value;
    }

    // remove error element 
    if (document.getElementById('error-message')) {
        document.getElementById('error-message').remove();
    }

    // success
    if (errors && errors.message) {
        // send error message
        const errorElement = document.createElement('p');
        errorElement.id = 'error-message';
        errorElement.innerHTML = errors.message;
        document.getElementById('form').append(errorElement);
    } else {
        // post data without refreshing page
        $.ajax({
            url: "http://httpbin.org/post",
            headers: {
                Accept: "application/json",
                "Content-Type": "text/plain; charset=utf-8"
            },
            data: JSON.stringify(payload),
            type: "POST", //request type
            success: function (result) {
                console.log('Response data: ', result.json);
            }
        });
    }
});

validateData = (value, regExp) => {
    const re = new RegExp(regExp);
    return re.test(value);
}

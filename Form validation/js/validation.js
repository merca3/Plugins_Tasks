$('#register').validate({
    rules: {
        username: {
            required: true,
            minlength: 3,
        },
        psw: {
            required: true,
            minlength: 8,
        },
        passwordRepeat: {
            required: true,
            equalTo: '#psw',
        },
        firstname: 'required',
        country: 'required',
        checkbox: 'required',
    },
    messages: {
        username: {
            required: 'Please enter your Username',
            minlength: 'Username must be minimum 3 characters long',
        },
        psw: {
            required: 'Please enter your Password',
            minlength: 'Password must be minimum 8 characters long',
        },
        passwordRepeat: {
            required: 'Please retype your Password',
            equalTo: 'Passwords should match',
        },
        firstname: 'Please enter your First name',
        country: 'Please select valid country',
        checkbox: 'You must agree before registration',
    },
});
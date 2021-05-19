export const loginValidation = ({ email, password }) => {

    sharedData = { email: {}, password: {} }

    if (!email) {
        msgs.push({ msg: 'Email Field is required', class: 'alert-danger' })
        sharedData.email.invalid = true;

    } else if (!validator.isEmail(email)) {
        msgs.push({ msg: 'Email format is inccorect', class: 'alert-danger' })
        sharedData.email.invalid = true;
    } else {
        sharedData.email.valid = true;
    }

    if (!password) {
        msgs.push({ msg: 'Password Field is required', class: 'alert-danger' })
        sharedData.password.invalid = true;
    } else if (!validator.isLength(password, { min: 6, max: 15 })) {
        msgs.push({ msg: 'Password should be 6-15 characters', class: 'alert-danger' })
        sharedData.password.invalid = true;
    } else {
        sharedData.password.valid = true;
    }

    let isValid = msgs.length === 0;
    return isValid;
}


export const signupValidation = ({ email, password, password2 }) => {
    loginValidation({ email, password });
    sharedData.password2 = {};

    if (!password2) {
        msgs.push({ msg: 'Confirmed Password Field is required', class: 'alert-danger' })
        sharedData.password2.invalid = true;
    } else if (!validator.equals(password, password2)) {
        msgs.push({ msg: 'Password not matching', class: 'alert-danger' })
        sharedData.password2.invalid = true;
    } else {
        sharedData.password2.valid = true;
    }

    let isValid = msgs.length === 0;
    return isValid;
}

export const createValidation = ({ maker, model, year, desc, price, imageUrl, material }) => {

    if (!maker) {
        sharedData.maker = { invalid: true, valid: false, msg: 'Provide Maker' }
    } else if (!validator.isLength(maker, { min: 4 })) {
        sharedData.maker = { invalid: true, valid: false, msg: 'Maker should be at least 4 characters' }
    } else {
        sharedData.maker = { valid: true, invalid: false }
    }

    if (!model) {
        sharedData.model = { invalid: true, valid: false, msg: 'Provide model' }
    } else if (!validator.isLength(model, { min: 4 })) {
        sharedData.model = { invalid: true, valid: false, msg: 'model should be at least 4 characters' }
    } else {
        sharedData.model = { valid: true, invalid: false }
    }

    if (sharedData.maker.invalid || sharedData.model.invalid) {
        msgs.push({ msg: 'Check your input', class: 'alert-danger' })
    }

    let isValid = msgs.length === 0;
    return isValid;

}
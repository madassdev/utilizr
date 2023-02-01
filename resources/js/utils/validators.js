export const validatePhone = (number) => {
    var validation = { valid: false, error: "Phone number validation failed" };
    let error;
    if (number && number.toString().length == 11) {
        validation = { valid: true };
        return validation;
    }
    if (!number) {
        error = "Phone number cannot be empty.";
        validation = { valid: false, error };
    }
    if (number.toString().length != 11) {
        error = "Please enter valid recipient phone number";
        validation = { valid: false, error };
    }

    return validation;
};

export const validateRange = (input, min, max) => {
    var validation = {
        valid: false,
        error: `Please enter number between ${parseFloat(
            min
        ).toLocaleString()} and ${max.toLocaleString()}`,
    };
    let error;
    console.log(min);
    if (input && parseFloat(input) >= min && parseFloat(input) <= max) {
        validation = { valid: true };
        return validation;
    }
    if (!input) {
        error = "Amount must be a number";
        validation = { valid: false, error };
    }

    return validation;

    return { valid: true };
};

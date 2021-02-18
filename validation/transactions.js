import Validator from 'validator';
import validText from './valid-text';

function validateTransactionInput(data) {
    let errors = {};

    data.category = validText(data.category) ? data.category : "";
    data.description = validText(data.description) ? data.description : "";
    data.value = validText(data.value) ? data.value : "";

    if (Validator.isEmpty(data.category)) {
        errors.category = "Category field is required";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description field is required";
    }

    if (Validator.isEmpty(data.value)) {
        errors.value = "Value field is required";
    }

    if (!Validator.isFloat(data.value, { min: 0.01 })) {
        errors.value = "Value must be greater than $0.01";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}

export default validateTransactionInput;
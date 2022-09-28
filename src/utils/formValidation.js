import Constants from "./constants";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const codeRegex = /^\d{4}$/;

export default function FormValidation(user, otpResponse){
    let errors = {}
    if (!otpResponse) {
        if (!phoneRegex.test(user.userLoginId) && !emailRegex.test(user.userLoginId) && user.userLoginId.length > 0) {
            errors = { userLoginId: Constants.ERROR_MESSAGES.INVALID_USER_LOGIN_ID}
        }else{
            errors = {}
        }
    } else if (otpResponse) {
        if (!codeRegex.test(user.otp) && user.otp.length > 0) {
            errors = { otp: Constants.ERROR_MESSAGES.INVALID_VERIFICATION_CODE}
        }else{
            errors = {}
        }
    }

    return errors;
}
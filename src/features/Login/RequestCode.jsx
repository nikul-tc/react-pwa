import React from 'react'
import {LoadingButton, TextField} from "../../utils/ui";
import Recaptcha from "../../components/Recaptcha";
import Constants from "../../utils/constants";

export default function RequestCode(props) {
    /**
     * Start Initials
     */
    const {updateUser, user, loading, captchaResponse, setCaptchaResponse, errors} = props;

    /**
     * End Initials
     */

    /**
     * Start Methods
     */
    function onEmailPhoneInputChange(e) {
        updateUser(e.target.value, 'userLoginId')
    }

    /**
     * End Methods
     */

    return (
        <>
            <TextField className="emailInput" required id="outlined-basic" label={Constants.INPUT_LABELS.EMAIL_PHONE}
                       onChange={onEmailPhoneInputChange}
                       name='email_phone'
                       error={!!errors?.userLoginId}
                       helperText={errors?.userLoginId}
                       variant="outlined"/>
            <div className="captcha">
                <Recaptcha onChange={setCaptchaResponse}/>
            </div>
            <LoadingButton disabled={!user?.userLoginId || !captchaResponse} fullWidth
                           loading={loading}
                           type="submit"
                           className="actionButton"
                           variant="contained">
                {Constants.BUTTON_LABELS.REQUEST_CODE}
            </LoadingButton>
        </>
    )
}
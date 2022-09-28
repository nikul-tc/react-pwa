import React, {useState} from 'react'
import {
    LoadingButton,
    TextField,
    InputAdornment,
    IconButton,
    VisibilityOff,
    Visibility,
} from "../../utils/ui";
import {formatUserLoginId} from '../../utils'
import Constants from "../../utils/constants";
import {useNavigate} from "react-router-dom";


export default function VerifyCode({user, updateUser, loading, errors}) {
    /**
     * Start Initials
     */
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()
    /**
     * End Initials
     */

    /**
     * Start Methods
     */
    function onOtpInputChange(e) {
        updateUser(e.target.value, 'otp', errors)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    /**
     * End Methods
     */

    return (
        <>
            <div className="otpHeading">

                A secure code has been sent to:&nbsp;<span
                className="contactId">{formatUserLoginId(user.userLoginId).slice(0, 6)}****</span>
            </div>
            <TextField
                onChange={onOtpInputChange}
                className="otpInput"
                required
                name='code'
                error={!!errors?.otp}
                helperText={errors?.otp}
                id="outlined-basic"
                label={Constants.INPUT_LABELS.VERIFICATION_CODE}
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="start">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>,
                }}
            />
            <LoadingButton loading={loading} fullWidth disabled={!user.otp} type="submit" className="actionButton"
                           variant="contained">
                {Constants.BUTTON_LABELS.VERIFY_CODE}
            </LoadingButton>
        </>
    )
}
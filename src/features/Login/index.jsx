import React, {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Global, css} from '@emotion/react'

import RequestCode from "./RequestCode";
import VerifyCode from "./VerifyCode";

import {Container, Box, Button, Divider, West} from "../../utils/ui";
import toast from "../../utils/toast";
import FormValidation from "../../utils/formValidation";
import constants from "../../utils/constants";
import {LoginWrapper} from './style';
import Constants from "../../utils/constants";

let codeResponse = false;
const loading = false;

export default function Login() {
    /**
     * Start Initials
     */
    const [otpRequested, setOtpRequested] = useState(false);
    const [user, setUser] = useState(null);
    const [captchaResponse, setCaptchaResponse] = useState(null);
    const [errors, setErrors] = useState({})

    const [searchParams, _] = useSearchParams();

    const navigate = useNavigate();
    /**
     * End Initials
     */

    /**
     * Start Life Cycle Methods
     */
    useEffect(() => {
        const params = searchParams.get("d");
        validateParamsAndRedirect(params)
    }, []);
    /**
     * End Life Cycle Methods
     */

    /**
     * Start Methods
     */
    function validateParamsAndRedirect(params) {
        if (params) {
            try {
                const payload = JSON.parse(window.atob(params));
                if (payload.o && payload.u) {
                   //dispatch verifyCode
                }
            } catch (e) {
                toast.error('Invalid url')
            }
        }
    }

    function updateUser(value, key) {
        if (!value || !key)
            return;
        const tempUser = user ? {...user} : {};
        if (key === 'userLoginId')
            tempUser[key] = value;
        else
            tempUser[key] = value;
        setUser(tempUser);
    }

    function onSubmitRequestCode() {
        if (codeResponse) {
            //verifyCode
        }else {
            //requestCode
            codeResponse = true
            setOtpRequested(true)
        }
    }
    function handleSubmit(e) {
        e.preventDefault()

        const validationResponse = FormValidation(user, codeResponse)
        if (Object.keys(validationResponse).length !== 0) {
            setErrors(validationResponse);
        } else {
            onSubmitRequestCode()
        }
    }

    function goToBack() {
        window.location.href = constants.ROUTES.LOGIN
    }
    /**
     * End Methods
     */

    return (
        <Container maxWidth={false} id="container">
            <Global
                styles={css`
                  #container {
                    height: 100%;
                    background-color: #F4F4F4;
                    padding: unset;
                    margin: unset;
                  }
                `}
            />
            <LoginWrapper>
                <div className="logoWrapper">
                    <img className="logo" src={Constants.LOGO} alt=""/>
                </div>
                <Box className="formContainer" component="form" autoComplete="off" onSubmit={handleSubmit}>
                    {codeResponse ? <><Button variant="text" size="large" startIcon={<West/>} onClick={goToBack}
                                             sx={{p: 1}}/> <Divider/></> : ''}
                    <Box className="InnerContainer">
                        {otpRequested ?
                            <VerifyCode loading={loading} user={user} updateUser={updateUser}
                                         errors={errors}/> :
                            <RequestCode loading={loading} user={user} captchaResponse={captchaResponse}
                                        setCaptchaResponse={setCaptchaResponse} updateUser={updateUser}
                                        errors={errors}/>
                        }
                    </Box>
                </Box>
            </LoginWrapper>
        </Container>
    );
}
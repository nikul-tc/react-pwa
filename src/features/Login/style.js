import styled from '@emotion/styled'
import { isMobile } from 'react-device-detect';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-flow: column;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  .logoWrapper {
      .logo{
        max-width: 195px;
      }
  }
  .formContainer {
    margin-top: 16px;
    max-width: 428px;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    .InnerContainer{
      padding: ${isMobile ? '28px 25px' : '32px 42px 42px 42px'};
    }
      .emailInput {
        width: 100%;
        border-color: #D5D5D5;
        border-radius: 7px;
        label {
          color: #ACACAC;          
        }
      }
      .captcha {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 28px;
      }
      .actionButton {
        height: 55px;
        text-transform: unset;
        min-width: 304px;
        :disabled {
          cursor: not-allowed;
        }
      }
      .otpHeading {
        display: flex;  
        margin-bottom: 18px;
        color: #ACACAC;    
        font-size: 14px; 
        .contactId {
          color: black;
        } 
      }
      .otpInput {
        width: 100%;
        margin-bottom: 35px;
        ::placeholder { 
          color: #ACACAC;
        }
      }
      .resendOtp {
        display: flex;
        color: #ACACAC;
        align-items: center;
        font-size: 14px;
        justify-content: center;
        .resendButton {
          text-transform: unset;
        }
      }
      
  }
`;
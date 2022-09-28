import styled from '@emotion/styled'
import { isMobile } from 'react-device-detect';

export const ScanZipBagWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-flow: column;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  .formContainer {
    margin-top: 16px;
    max-width: 428px;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
    .InnerContainer{
      padding: ${isMobile ? '28px 25px' : '32px 42px 42px 42px'};
      .nPagHeader{
        color: #4f7cc4;
        font-size: 24px;
        text-align: center;
        margin-bottom: 24px;
      }
      .MuiTextField-root{
        min-width: ${428 - 85}px;
        width: 100%;
        ::placeholder {
          color: #ACACAC;
        }
      }
      .actionButton {
        margin-top: 24px;
        height: 55px;
        text-transform: unset;
        min-width: 304px;
        :disabled {
          cursor: not-allowed;
        }
      }
    }    
  }
`;
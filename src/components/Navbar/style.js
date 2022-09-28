import styled from '@emotion/styled'
import {isMobile} from 'react-device-detect';

export const NavbarWrapper = styled.div`
  .nToolbar{
    justify-content: space-between;
    .nLabelSite{
      color: #ACACAC
    }
  }
  .nLogo{
    max-width: ${isMobile ? '150px' : '200px'}
  }
  .nUsername{
    font-size: 15px;
    margin-right: 8px
  }
  .nListItem{
    display: block
  }
  .nFooterGrid{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .nFooterListItem{
    display: block;
    padding-left:8px;
  }
`;
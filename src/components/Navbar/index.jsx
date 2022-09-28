import * as React from 'react';
import {isMobile} from "react-device-detect";
import {styled} from '@mui/material/styles';

import Constants from "../../utils/constants";
import {
    Box,
    Menu,
    MenuItem,
    MuiAppBar,
    CssBaseline,
    Toolbar,
    Typography,
} from "../../utils/ui";
import {NavbarWrapper} from "./style";

const drawerWidth = isMobile ? '100%' : 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 0px 0px -1px rgba(0,0,0,0.1),0px 1px 0px 0px rgba(0,0,0,0.1),0px 0px 1px 0px rgba(0,0,0,0.1) !important',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        boxShadow: '0px 0px 0px -1px rgba(0,0,0,0.1),0px 1px 0px 0px rgba(0,0,0,0.1),0px 0px 1px 0px rgba(0,0,0,0.1) !important',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function Navbar(props) {
    /**
     * Start Initials
     */
    const {site} = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    /**
     * End Initials
     */

    /**
     * Start Methods
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    /**
     * End Methods
     */

    return (
        <NavbarWrapper>
            <CssBaseline/>
            <AppBar position="fixed" color="inherit">
                <Toolbar className="nToolbar">
                    <a href={Constants.ROUTES.SITE_SELECTION}>
                        <img src={Constants.LOGO} alt='Neelyx Labs' className="nLogo"/>
                    </a>

                    <Typography><span className="nLabelSite">Site</span>: {site}</Typography>

                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <Typography variant="h2" className="nUsername">John Doe</Typography>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    );
}

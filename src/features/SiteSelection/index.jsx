import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, LoopIcon, MenuItem, TextField,
} from "../../utils/ui";
import Navbar from "../../components/Navbar";
import {SiteSelectionWrapper} from "./style";
import Constants from "../../utils/constants";

export default function SiteSelection() {

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

            <Navbar site={null}/>

            <SiteSelectionWrapper>
                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <TextField
                            fullWidth
                            select
                            label={Constants.INPUT_LABELS.SELECT_SITE}
                        >
                            <MenuItem value="1">
                                Site 1
                            </MenuItem>
                        </TextField>
                        <Button fullWidth variant="contained" startIcon={<LoopIcon/>} className="actionButton">
                            Sync Offline
                        </Button>
                    </Box>
                </Box>
            </SiteSelectionWrapper>

        </Container>
    );
}
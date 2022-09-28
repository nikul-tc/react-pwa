import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, LoopIcon, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ScanManifestWrapper} from "./style";

export default function ScanManifest() {

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

            <Navbar site="Site1"/>

            <ScanManifestWrapper>
                <Typography variant="h2" className="nPagOutHeader">Total ZIP Bags: 23</Typography>

                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2" className="nPagHeader">{Constants.PAGE_HEADER.SCAN_MANIFEST_BC}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.MANIFEST_BC}
                        >
                        </TextField>
                        <Button fullWidth variant="contained" startIcon={<LoopIcon/>} className="actionButton">
                            {Constants.BUTTON_LABELS.SCAN_MANIFEST}
                        </Button>
                    </Box>
                </Box>
            </ScanManifestWrapper>

        </Container>
    );
}
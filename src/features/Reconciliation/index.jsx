import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, Divider, Stack, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ReconciliationWrapper} from "./style";

export default function Reconciliation() {

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

            <ReconciliationWrapper>
                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2"
                                    className="nPagHeader">{Constants.PAGE_HEADER.SCAN_ZIP_BAG}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.ZIP_BAG_BC}
                        >
                        </TextField>

                        <Divider sx={{mt: 3, mb: 2}}/>

                        <Typography variant="h2" className="nPagHeader2">
                            {Constants.PAGE_HEADER.CURRENT_ZIP_BAG_STATUS}
                        </Typography>

                        <Typography variant="h2" className="nPagHeader3">
                            3/<b>23</b>
                        </Typography>

                        <Button fullWidth variant="outlined" className="actionButton">
                            {Constants.BUTTON_LABELS.SCAN_AGAIN}
                        </Button>
                        <Button fullWidth variant="contained" className="actionButton" color="success">
                            {Constants.BUTTON_LABELS.SCAN_NEXT_ZIP_BAG}
                        </Button>
                    </Box>
                </Box>
            </ReconciliationWrapper>

        </Container>
    );
}
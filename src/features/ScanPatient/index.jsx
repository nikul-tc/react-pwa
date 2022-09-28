import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ScanPatientWrapper} from "./style";

export default function ScanPatient() {

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

            <ScanPatientWrapper>
                <Typography variant="h2" className="nPagOutHeader">Specimen in the ZIP bag: 0/20</Typography>

                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2" className="nPagHeader">{Constants.PAGE_HEADER.SCAN_PATIENT_ID}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.PATIENT_ID}
                        >
                        </TextField>
                        <Button fullWidth variant="contained" className="actionButton">
                            {Constants.BUTTON_LABELS.SCAN_PATIENT}
                        </Button>

                        <Button fullWidth variant="contained" className="actionButton" color="error">
                            {Constants.BUTTON_LABELS.CLOSE_ZIP_BAG}
                        </Button>
                    </Box>
                </Box>
            </ScanPatientWrapper>

        </Container>
    );
}
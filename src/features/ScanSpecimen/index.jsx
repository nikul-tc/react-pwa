import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ScanSpecimenWrapper} from "./style";

export default function ScanSpecimen() {

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

            <ScanSpecimenWrapper>
                <Typography variant="h2" className="nPagOutHeader">Specimen in the ZIP bag: 19/20</Typography>

                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2" className="nPagHeader">{Constants.PAGE_HEADER.SCAN_SPECIMEN_BC}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.SPECIMEN_BC}
                        >
                        </TextField>
                        <Button fullWidth variant="contained" className="actionButton">
                            {Constants.BUTTON_LABELS.SCAN_SPECIMEN}
                        </Button>
                    </Box>
                </Box>
            </ScanSpecimenWrapper>

        </Container>
    );
}
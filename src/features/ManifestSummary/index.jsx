import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, Divider, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ManifestSummaryWrapper} from "./style";

export default function ManifestSummary() {

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

            <ManifestSummaryWrapper>
                <Typography variant="h2" className="nPagOutHeader">Specimen in the ZIP bag: 0/20</Typography>

                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2" className="nPagHeader">{Constants.PAGE_HEADER.MANIFEST_SUMMARY}</Typography>

                        <Typography variant="p" display="block" align="center" className="nSummaryLabel">Zip Bags : <b>23</b></Typography>
                        <Typography variant="p" display="block" align="center" className="nSummaryLabel">Specimens : <b>460</b></Typography>

                        <Divider sx={{mt: 3, mb:2}} />

                        <Button fullWidth variant="contained" className="actionButton">
                            {Constants.BUTTON_LABELS.PRINT}
                        </Button>
                        <Button fullWidth variant="contained" className="actionButton">
                            {Constants.BUTTON_LABELS.VIEW_REPORT}
                        </Button>
                        <Button fullWidth variant="contained" className="actionButton" color="success">
                            {Constants.BUTTON_LABELS.OPEN_NEW_ZIP_BAG}
                        </Button>
                        <Button fullWidth variant="contained" className="actionButton" color="error">
                            {Constants.BUTTON_LABELS.CLOSE_MANIFEST}
                        </Button>
                    </Box>
                </Box>
            </ManifestSummaryWrapper>

        </Container>
    );
}
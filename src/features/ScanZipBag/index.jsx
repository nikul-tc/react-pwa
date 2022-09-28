import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {ScanZipBagWrapper} from "./style";

export default function ScanZipBag() {

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

            <ScanZipBagWrapper>
                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2" className="nPagHeader">{Constants.PAGE_HEADER.SCAN_ZIP_BAG}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.ZIP_BAG_BC}
                        >
                        </TextField>
                        <Button fullWidth variant="contained" className="actionButton">
                            {Constants.BUTTON_LABELS.OPEN_ZIP_BAG}
                        </Button>
                    </Box>
                </Box>
            </ScanZipBagWrapper>

        </Container>
    );
}
import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, Divider, Stack, TextField, Typography,
} from "../../utils/ui";
import Constants from "../../utils/constants";
import Navbar from "../../components/Navbar";
import {VerifyPatientWrapper} from "./style";
import {Card, CardContent, CardMedia} from "@mui/material";

export default function VerifyPatient() {

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

            <VerifyPatientWrapper>
                <Typography variant="h2" className="nPagOutHeader">Specimen in the ZIP bag: 0/20</Typography>

                <Box className="formContainer" component="form" autoComplete="off">
                    <Box className="InnerContainer">
                        <Typography variant="h2"
                                    className="nPagHeader">{Constants.PAGE_HEADER.SCAN_PATIENT_ID}</Typography>
                        <TextField
                            fullWidth
                            label={Constants.INPUT_LABELS.PATIENT_ID}
                            disabled
                            value="PAT12345"
                            defaultValue="PAT12345"
                        >
                        </TextField>

                        <Divider sx={{mt:3}}/>

                        <Typography variant="h2"
                                    className="nCardHeader">
                            Verify Patient Details
                        </Typography>
                        <Card className="nCard">
                            <CardMedia
                                component="img"
                                sx={{ width: 100 }}
                                image="images/logo.png"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography variant="subtitle1" className="nCardList" component="div">
                                        First Name :<b>MA</b>
                                    </Typography>
                                    <Typography variant="subtitle1" className="nCardList" component="div">
                                        Last Name :<b>JO</b>
                                    </Typography>
                                    <Typography variant="subtitle1" className="nCardList" component="div">
                                        Date Of Birth :<b>06/16</b>
                                    </Typography>
                                    <Typography variant="subtitle1" className="nCardList" component="div">
                                        Identifier :<b>JOMA161985</b>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>

                        <Stack direction="row" spacing={2}>
                            <Button fullWidth variant="outlined" className="actionButton" color="error">
                                {Constants.BUTTON_LABELS.NO_MATCH}
                            </Button>
                            <Button fullWidth variant="contained" className="actionButton">
                                {Constants.BUTTON_LABELS.VERIFY_PATIENT}
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </VerifyPatientWrapper>

        </Container>
    );
}
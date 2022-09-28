import React from "react";
import {Global, css} from '@emotion/react'

import {
    Box, Button,
    Container, Grid, Paper,
    Stack, Typography
} from "../../utils/ui";
import Navbar from "../../components/Navbar";
import {ReportWrapper} from "./style";
import {DataGrid} from "@mui/x-data-grid";
import Constants from "../../utils/constants";

const reportColumns = [
    {
        field: 'identifier',
        headerName: 'Patient Id',
        flex: 0.5,
        renderHeader: (params) => (<strong>Patient Id</strong>)
    },
    {
        field: 'fname',
        headerName: 'First Initial',
        flex: 0.5,
        renderHeader: (params) => (<strong>Last Initial</strong>)
    },
    {
        field: 'lname',
        headerName: 'Last Initial',
        flex: 0.5,
        renderHeader: (params) => (<strong>First Initial</strong>)
    },
    {
        field: 'specimen_bc',
        headerName: 'Specimen Barcode',
        flex: 1,
        renderHeader: (params) => (<strong>Specimen Barcode</strong>),
    },
    {
        field: 'zip_bag_bc',
        headerName: 'Zip Bag Barcode',
        flex: 1,
        renderHeader: (params) => (<strong>Zip Bag Barcode</strong>),
    },
    {
        field: 'manifest_bc',
        headerName: 'Manifest Barcode',
        flex: 1,
        renderHeader: (params) => (<strong>Manifest Barcode</strong>),
    },
    {
        field: 'date_created',
        headerName: 'Date Created',
        flex: 1,
        renderHeader: (params) => (<strong>Date Created</strong>),
    },
];

const rows = [
    {
        "id": 1,
        "identifier": '123abc',
        "fname": 'J',
        "lname": 'D',
        "specimen_bc": '678qwe',
        "zip_bag_bc": '123zxc',
        "manifest_bc": '321hgf',
        "date_created": '06-25-2022',
    }
];
export default function Report() {

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

            <ReportWrapper>
                <Box component="main" className="nMainBox">
                    <Container>
                        <Paper elevation={1} sx={{mb: 3, p: 1}}>
                            <Grid container spacing={1} sx={{p:1}}>
                                <Grid item xs={6}>
                                    <Typography variant="p" display="block" className="nLabel">Zip Bag ID : <b>ZIP0123</b></Typography>
                                    <Typography variant="p" display="block" className="nLabel">Specimens : <b>13</b></Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={1}  direction="row"
                                           justifyContent="center"
                                           alignItems="center">
                                        <Button fullWidth variant="contained" className="actionButton">
                                            {Constants.BUTTON_LABELS.PRINT}
                                        </Button>
                                        <Button fullWidth variant="contained" className="actionButton" color="success">
                                            {Constants.BUTTON_LABELS.OPEN_NEW_ZIP_BAG}
                                        </Button>
                                        <Button fullWidth variant="contained" className="actionButton" color="error">
                                            {Constants.BUTTON_LABELS.END_SHIFT}
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Paper>
                        <DataGrid
                            columns={reportColumns}
                            rows={rows}
                            autoHeight
                            disableColumnMenu
                            disableSelectionOnClick
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            components={{
                                NoRowsOverlay: () => (
                                    <Stack height="100%" alignItems="center" justifyContent="center">
                                        No reports available
                                    </Stack>
                                ),
                                NoResultsOverlay: () => (
                                    <Stack height="100%" alignItems="center" justifyContent="center">
                                        filter returns no reports
                                    </Stack>
                                ),
                            }}
                            sx={{
                                '.MuiDataGrid-columnSeparator': {
                                    display: 'none',
                                },
                                '&.MuiDataGrid-root': {
                                    border: 'none',
                                },
                                '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                    outline: 'none',
                                },
                                '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
                                    outline: 'none',
                                },
                                '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within': {
                                    outline: 'none',
                                },
                                backgroundColor: 'white'
                            }}/>
                    </Container>
                </Box>
            </ReportWrapper>

        </Container>
    );
}
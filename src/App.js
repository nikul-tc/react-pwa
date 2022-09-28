import React from "react";
import {Navigate, Route, Routes, BrowserRouter} from "react-router-dom";
import {css, ThemeProvider} from "@mui/material";
import {Global} from "@emotion/react";

import theme from './theme'
import Constants from "./utils/constants";
import Login from "./features/Login";
import ScanZipBag from "./features/ScanZipBag";
import ScanPatient from "./features/ScanPatient";
import ScanSpecimen from "./features/ScanSpecimen";
import ScanManifest from "./features/ScanManifest";
import SiteSelection from "./features/SiteSelection";
import ZipBagSummary from "./features/ZipBagSummary";
import VerifyPatient from "./features/VerifyPatient";
import ManifestSummary from "./features/ManifestSummary";
import Report from "./features/Report";
import Reconciliation from "./features/Reconciliation";

const App = () => (
    <ThemeProvider theme={theme}>
        <Global
            styles={css`
              html, body, #root {
                height: 100%;
                margin: unset;
                background-color: #F4F4F4;
              }
            `}
        />
        <BrowserRouter>
            <Routes>
                <Route exact path={Constants.ROUTES.LOGIN} element={<Login/>}/>
                <Route exact path={Constants.ROUTES.SITE_SELECTION} element={<SiteSelection/>}/>
                <Route exact path={Constants.ROUTES.SCAN_ZIP_BAG} element={<ScanZipBag/>}/>
                <Route exact path={Constants.ROUTES.SCAN_PATIENT} element={<ScanPatient/>}/>
                <Route exact path={Constants.ROUTES.SCAN_SPECIMEN} element={<ScanSpecimen/>}/>
                <Route exact path={Constants.ROUTES.SCAN_MANIFEST} element={<ScanManifest/>}/>
                <Route exact path={Constants.ROUTES.ZIP_BAG_SUMMARY} element={<ZipBagSummary/>}/>
                <Route exact path={Constants.ROUTES.VERIFY_PATIENT} element={<VerifyPatient/>}/>
                <Route exact path={Constants.ROUTES.MANIFEST_SUMMARY} element={<ManifestSummary/>}/>
                <Route exact path={Constants.ROUTES.REPORT} element={<Report/>}/>
                <Route exact path={Constants.ROUTES.RECONCILIATION} element={<Reconciliation/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
)

export default App;

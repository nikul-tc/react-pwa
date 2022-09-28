import Reconciliation from "../features/Reconciliation";

const Constants = {
    API: {
        REQUEST_CODE: 'auth/request-code',
        LOGIN: 'auth/login',
    },
    LOGIN_METHOD: {
        PHONE: 'phone', EMAIL: 'email',
    },
    ROUTES: {
        LOGIN: '/',
        SITE_SELECTION: '/site-selection',
        SCAN_ZIP_BAG: '/scan-zip-bag',
        SCAN_PATIENT: '/scan-patient',
        SCAN_SPECIMEN: '/scan-specimen',
        SCAN_MANIFEST: '/scan-manifest',
        ZIP_BAG_SUMMARY: '/zip-bag-summary',
        VERIFY_PATIENT: '/verify-patient',
        MANIFEST_SUMMARY: '/manifest-summary',
        REPORT: '/report',
        RECONCILIATION: '/reconciliation',
    },
    ERROR_MESSAGES: {
        INVALID_USER_LOGIN_ID: 'Please enter valid email address / phone number',
        INVALID_VERIFICATION_CODE: 'Please enter valid verification code'
    },
    INPUT_LABELS: {
        EMAIL_PHONE: 'Enter Email Address / Mobile Number',
        VERIFICATION_CODE: 'Enter Verification Code',
        SELECT_SITE: 'Select Site',
        ZIP_BAG_BC: 'Enter the Zip Bag Barcode',
        PATIENT_ID: 'Enter the Patient ID',
        SPECIMEN_BC: 'Enter the Specimen Barcode',
        MANIFEST_BC: 'Enter the Manifest Barcode',
    },
    BUTTON_LABELS:{
        REQUEST_CODE: 'Lookup Results',
        VERIFY_CODE: 'Enter the Zip Bag Barcode',
        OPEN_ZIP_BAG: 'Open Zip Bag',
        OPEN_NEW_ZIP_BAG: 'Open New Zip Bag',
        SCAN_PATIENT: 'Next',
        CLOSE_ZIP_BAG: 'Close the Zip Bag',
        SCAN_SPECIMEN: 'Next',
        SCAN_MANIFEST: 'Sync Online',
        VIEW_REPORT: 'View Detail Report',
        PRINT: 'Print',
        VERIFY_PATIENT: 'Verify',
        NO_MATCH: 'No Match',
        CLOSE_MANIFEST: 'Close Manifest',
        END_SHIFT: 'End Shift',
        SCAN_AGAIN: 'Scan Again',
        SCAN_NEXT_ZIP_BAG: 'Scan Next Zip Bag',
    },
    PAGE_HEADER: {
        SCAN_ZIP_BAG: 'Scan the Zip Bag Barcode',
        SCAN_PATIENT_ID: 'Scan the Patient ID',
        SCAN_SPECIMEN_BC: 'Scan Specimen Barcode',
        SCAN_MANIFEST_BC: 'Scan Manifest Barcode',
        ZIP_BAG_SUMMARY: 'Zip Bag Summary',
        MANIFEST_SUMMARY: 'Manifest Summary',
        CURRENT_ZIP_BAG_STATUS: 'Current Zip Bag Status',
    },
    COPYRIGHT: '@Neelyx Labs 2022',
    LOGO: 'images/logo.png'
}

export default Constants
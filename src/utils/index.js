import jwt_decode from "jwt-decode";

export function formatUserLoginId(userLoginId, mask = false) {
    if (!userLoginId || getRequestMethod(userLoginId) === 'email')
        return userLoginId;
    const formattedNumber = userLoginId.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    if (!mask)
        return formattedNumber;

    return `${formattedNumber.slice(0, 9)}-****`
}

export function getRequestMethod(value) {
    const re = /\S+@\S+\.\S+/;
    return re.test(value) ? 'email' : 'phone';
}

export function parseJwt(token) {
    if (!token)
        return null;
    try {
        const userData = jwt_decode(token);
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        if (currentTimeInSeconds > userData.exp)
            return null;
        return userData;
    } catch (e) {
        return null;
    }
}

export function dateTimeFormat(dateString, isDate = false) {
    if (Date.parse(dateString)) {
        const dateTime = new Date(dateString)
        if (/:/.test(dateString) && !isDate) {
            //this formats date string into date [Jul 20, 2022, 5:30:00 AM]
            return new Intl.DateTimeFormat('en-US', {dateStyle: 'medium', timeStyle: 'medium'}).format(dateTime)
        } else {
            //this formats date string into date [Jul 20, 2022]
            return new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(dateTime)
        }
    } else {
        return '-'
    }
}
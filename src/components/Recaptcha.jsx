import React, {useEffect} from "react";

export default function Recaptcha({onChange}) {
    /**
     * Start Life Cycle Methods
     */
    useEffect(() => {
        try {
            if (!window.grecaptcha || !window.grecaptcha.enterprise || !window.grecaptcha.enterprise.render) {
                setTimeout(() => {
                    renderRecaptcha();
                }, 500)
            } else {
                renderRecaptcha();
            }
        } catch (e) {

        }
    }, []);

    /**
     * End Life Cycle Methods
     */

    /**
     * Start Methods
     */
    function renderRecaptcha() {
        window.grecaptcha?.enterprise?.render('g-recaptcha', {
            'sitekey': '6Le_5bMhAAAAADO0_hKzJO2oqKI0nqt0VomfMQRQ',
            'callback': onChange
        });
    }

    /**
     * End Methods
     */

    return (
        <div id="g-recaptcha"/>
    );
}

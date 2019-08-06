import React from "react";

import Helmet from 'react-helmet';

const HelmetComponent = () => {

    const jsx = (
        <Helmet>
            <html lang='en'></html>

            <link 
            rel='stylesheet' 
            href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' 
            integrity='sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay' 
            crossorigin='anonymous' 
            />

            <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Baumans|Exo+2|Exo+2+Thin|Exo+2+Extra-Light|Exo+2+Light|Exo+2+Regular|Exo+2+Medium|Exo+2+Semi-Bold|Exo+2+Bold|Exo+2+Extra-Bold|Exo+2+Black&display=swap" 
            />

        </Helmet>
    )

    return jsx;
}

export default HelmetComponent;
import React from "react";
import './styles.css';

import Header from '../Header';

const App = ({ data }) => {

    const { contentfulIndex } = data;
    const { headerTitle, headerSubtitle, headerPill, headerImage, headerImageAlt, main} = contentfulIndex;

    const header = {
        headerTitle,
        headerSubtitle,
        headerPill,
        headerImage,
        headerImageAlt
    }

    const jsx = (
        <div>
            <Header
            header={header}
            ></Header>
        </div>
    )

    return jsx;
}

export default App;
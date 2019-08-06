import React from "react";
import './styles.css';

import HelmetComponent from '../Helmet';
import Nav from '../Nav';
import Header from '../Header';
import Main from '../Main';

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

            <HelmetComponent></HelmetComponent>

            <Nav></Nav>
            
            <Header
            header={header}
            ></Header>

            <Main
            main={main}
            ></Main>
            
        </div>
    )

    return jsx;
}

export default App;
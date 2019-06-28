import React from "react";
import './styles.css';

import { Link } from 'gatsby';

const Header = ({ header }) => {

    const { headerTitle, headerSubtitle, headerPill, headerImage, headerImageAlt } = header;
    const jsx = (
        <header>
            <h1>{headerTitle}</h1>
            <h2>{headerSubtitle}</h2>

            <Link
            to={headerPill.to.slug}
            >{headerPill.text}</Link>

            <img 
            src={`https:${headerImage.file.url}`}
            alt={headerImageAlt}
            />
        </header>
    )

    return jsx;
}

export default Header;
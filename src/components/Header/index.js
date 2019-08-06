import React from "react";
import './styles.css';

import { Link } from 'gatsby';

const Header = ({ header }) => {

    const { headerTitle, headerSubtitle, headerPill, headerImage, headerImageAlt } = header;
    const jsx = (
        <header className='Header'>

            <div className='Header_box Header_box___text'>
                <h1 className='Header_title'>{headerTitle}</h1>
                <h2 className='Header_subtitle'>{headerSubtitle}</h2>
                <Link
                to={headerPill.to.slug}
                >{headerPill.text}</Link>
            </div>

            <div className='Header_box Header_box___image'>
                <img 
                className='Header_image'
                src={`https:${headerImage.file.url}`}
                alt={headerImageAlt}
                />
            </div>
        </header>
    )

    return jsx;
}

export default Header;
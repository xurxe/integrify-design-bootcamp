import React from "react";
import './styles.css';

import { Component } from 'react';
import { StaticQuery, graphql, Link} from 'gatsby';
import Img from 'gatsby-image';

class Nav extends Component {

    state = {
        hello: true,
    }

    render() {
        const { contentfulNavigationBar } = this.props.data;
        const { logoLeft, linksCenter, linkRight} = contentfulNavigationBar;

        const jsx = (
            <nav className='Nav'>
                <div className='Nav_box'>
                    <button className='Nav_button'>
                        <Img className='Nav_logo' fixed={logoLeft.fixed}></Img>
                    </button>
                </div>

                <div className='Nav_box'>
                    {linksCenter.map(link => (
                        <Link
                        key={link.id}
                        className='Nav_link Nav_link___center'
                        to={link.slug ? `/${link.slug}` : '/'}   
                        >{link.name}</Link>
                    ))}
                </div>
                
                <div className='Nav_box'>
                    <Link
                    className='Nav_link Nav_link___right'
                    to={linkRight.slug ? `/${linkRight.slug}` : '/'}
                    >{linkRight.name}</Link>
                </div>
            </nav>
        )
    
        return jsx;
    }
}

export default props => (
    <StaticQuery
        query={query}
        render={data => <Nav data={data} {...props}></Nav>}
    />
)

export const query = graphql`
{
	contentfulNavigationBar {
        id
        logoLeft {
            fixed (width: 40) {
                base64
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
            }
        }
        linksCenter {
        __typename
        ... on ContentfulIndex {
            id
            name
        }
        ... on ContentfulPage {
            id
            name
            slug
        }
        }
        linkRight {
        id
        name
        slug
        }
	}
}
`
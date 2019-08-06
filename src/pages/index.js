import React from "react";
import { graphql } from 'gatsby';

import App from '../components/App';

const IndexPage = ({ data }) => {

    const jsx = (
        <App
        data={data}
        ></App>
    )

    return jsx;
}

export default IndexPage

export const query = graphql`
{
    contentfulIndex {
        headerTitle
        headerSubtitle
        headerPill {
            text
            to {
                slug
            }
        }
        headerImage {
            file {
                url
            }
        }
        headerImageAlt
        main {
            __typename
            ... on ContentfulTitlesAndThreeColumns {
            id
            title
            subtitle {
                childMarkdownRemark {
                    html
                }
            }
            column1 {
                id
                childMarkdownRemark {
                html
                }
            }
            column2 {
                id
                childMarkdownRemark {
                    html
                }
            }
            column3 {
                id
                childMarkdownRemark {
                    html
                }
            }
            }
            ... on ContentfulMembers {
            id
            title
            members {
                id
                name
                position
                company
                image {
                fluid (quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                }
                }
            }
            }
        }
    }
}
  
`
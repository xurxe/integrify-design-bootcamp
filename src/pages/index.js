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
            }
        }
    }
}
`
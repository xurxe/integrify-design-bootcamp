import React from "react";
import './styles.css';

import Img from 'gatsby-image';

const Main = ({ main }) => {

    const jsx = (
        <main className='Main'>
            {main.map((section) => (
                <Section
                key={section.id}
                section={section}></Section>
            ))}
        </main>
    )

    return jsx;
}

const Section = ({ section }) => {

    const { __typename } = section;
    
    let jsx;

    if (__typename === 'ContentfulMembers') {
        jsx = (
            <Members
            section={section}
            ></Members>
        )
    }

    else {
        jsx = <p>{__typename}</p>
    }

    return jsx;
}

const Members = ({ section }) => {

    const { title, members } = section;

    const jsx = (
        <section className='Section'>
            <h3 className='Section_title'>{title}</h3>
            {members.map(member => (
                <div className='Member'>
                    <p className='Member_name'>{member.name}</p>
                    <Img className='Member_image' fluid={member.image.fluid}></Img>
                </div>
            ))}
        </section>
    )

    return jsx;
}

export default Main;
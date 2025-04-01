import React from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 2rem;
    max-width: 800px;
    margin: auto;
`;

const Paragraph = styled.p`
    line-height: 1.6;
    font-size: 1.1rem;
`;

const About = () => {
    return (
        <Section data-aos = "fade-up">
            <h2>About Me</h2>
            <Paragraph>
                Multidisciplinary undergraduate student of Computer Science and Religious Studies at Case Western Reserve University, committed to developing technology that serves people. My studies include Full-Stack web development, computer security, and machine learning.
            </Paragraph>
        </Section>
    );
};

export default About;
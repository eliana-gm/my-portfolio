import React from "react";
import styled from "styled-components";

const Section = styled.section`
    padding: 2rem;
    text-align: center;
`;

const Email = styled.a`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.secondary};
    display: block;
    margin: 1rem 0;
`;

const Socials = styled.div`
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
`;

const SocialLink = styled.a`
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    margin: 0 0.5rem;
`;

const Contact = () => {
    return (
        <Section data-aos = "fade-up">
            <h2>Contact</h2>
            <Email href = "mailto:elianagmpolanco@gmail.com">elianagmpolanco@gmail.com</Email>
            <Socials>
                <SocialLink href="https://github.com/eliana-gm" target="_blank">GitHub</SocialLink>
                <SocialLink href="https://linkedin.com/in/eliana-matos-polanco-51a630262">LinkedIn</SocialLink>
            </Socials>
        </Section>
    );
};

export default Contact;
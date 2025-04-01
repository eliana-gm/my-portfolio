import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
    background: ${({ theme }) => theme.primary};
    color:rgb(234, 234, 234);
`;

const Footer = () => {
    return (
        <Container>
            © {new Date().getFullYear()} Eliana Matos. Built with React.
        </Container>
    );
};

export default Footer;
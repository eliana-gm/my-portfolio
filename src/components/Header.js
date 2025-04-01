import React from "react";
import styled from "styled-components";

const Container = styled.header`
    padding: 3rem 2rem;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
`;

const Header = () => {
    return (
        <Container data-aos = "fade-down">
            <Title>Eliana Matos</Title>
            <Subtitle>Computer Science Student & Software Developer.</Subtitle>
        </Container>
    );
};

export default Header;
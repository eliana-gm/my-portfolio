import React from "react";
import styled from "styled-components";

const Toggle = styled.button`
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    z-index: 1000;

    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        color: #fff;
    }
`;

const ToggleTheme = ({toggleTheme, isDark }) => {
    return (
        <Toggle onClick = {toggleTheme}>
            {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </Toggle>
    );
};

export default ToggleTheme;
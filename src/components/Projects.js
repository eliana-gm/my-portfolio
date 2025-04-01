import React from "react";
import styled from "styled-components";
import projects from "../data/projects";

const Section = styled.section`
    padding: 2rem;
    max-width: 1000px;
    margin: auto;
`;

const ProjectCard = styled.div`
    background: ${({ theme }) => 
        theme.background === "rgb(201, 233, 248)" 
        ? "rgb(142, 181, 199)" 
        : "rgb(16, 16, 99)"};
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.primary};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 1rem;
`;

const TechBadge = styled.span`
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Link = styled.a`
    color: ${({ theme }) => theme.secondary};
    margin-right: 1rem;
`;


const Projects = () => {
    return (
        <Section data-aos = "fade-up">
            <h2>Projects</h2>
            {projects.map((proj, idx) => (
                <ProjectCard key = {idx} data-aos = "zoom-in-up">
                    <Title>{proj.title}</Title>
                    <p>{proj.description}</p>
                    <TechStack>
                        {proj.tech.map((tech, i) => (
                            <TechBadge key={i}>{tech}</TechBadge>
                        ))}
                    </TechStack>
                    <Link href = {proj.github} target = "_blank" rel = "noopener noreferrer">GitHub</Link>
                    <Link href = {proj.demo} target = "_blank" rel = "noopener noreferrer">Live Demo</Link>
                </ProjectCard>
            ))}
        </Section>
    );
};

export default Projects;
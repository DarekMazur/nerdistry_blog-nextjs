import React from 'react';
import Link from 'next/link';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { ProjectSection, ProjectsWrapper, StyledPage } from '../StyledPage/StyledPage.style';

const ProjectsPage = ({ repos }) => {
  return (
    <StyledPage>
      <SectionTitle title="Projects" description="Dolor Sit Amet" />
      {repos.map((repo) => (
        <ProjectsWrapper key={repo.id}>
          <ProjectSection>
            <SectionTitle isProject description={repo.name} />
          </ProjectSection>
          <ProjectSection background>
            <SectionTitle isProject title="Show details" />
          </ProjectSection>
          <ProjectSection>
            <p>{repo.description}</p>
            <p>Stack: {repo.language}</p>
            <p>
              {repo.homepage ? (
                <Link href={repo.homepage}>
                  <a target="_blank">Visit project page</a>
                </Link>
              ) : (
                <p>Work in progress</p>
              )}
            </p>
          </ProjectSection>
        </ProjectsWrapper>
      ))}
    </StyledPage>
  );
};

export default ProjectsPage;

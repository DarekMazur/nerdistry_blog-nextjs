import React from 'react';
import ProjectsPage from '../components/pages/ProjectsPage/ProjectsPage';

const Projects = ({ repos }) => {
  return <ProjectsPage repos={repos} />;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_LINK}/users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos`);
  const repos = await res.json();

  return {
    props: {
      repos,
    },
  };
}

export default Projects;

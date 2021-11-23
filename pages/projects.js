import React from 'react';
import ProjectsPage from '../components/pages/ProjectsPage/ProjectsPage';

const Projects = ({ repos }) => {
  return <ProjectsPage repos={repos} />;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_LINK}/users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos`);
  const unsortedRepos = await res.json();

  const repos = unsortedRepos.sort((a, b) => {
    const dateA = new Date(a.pushed_at);
    const dateB = new Date(b.pushed_at);
    return dateB - dateA;
  });

  return {
    props: {
      repos,
    },
  };
}

export default Projects;

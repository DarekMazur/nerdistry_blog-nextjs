import React from 'react';
import ProjectsPage from '../components/pages/ProjectsPage/ProjectsPage';
import { ContentContext } from '../providers/ContentProvider';

const Projects = ({ repos }) => {
  const { getIsSingle } = React.useContext(ContentContext);

  React.useEffect(() => {
    getIsSingle(false);
  }, []);

  return <ProjectsPage repos={repos} />;
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_API_LINK}/users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos`);
  const unsortedRepos = await res.json();

  const repos = unsortedRepos.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  });

  return {
    props: {
      repos,
    },
  };
}

export default Projects;

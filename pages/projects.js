import React from 'react';
import Link from 'next/link';

const ProjectsPage = ({ repos }) => {
  return (
    <>
      <h1>Projects</h1>
      {repos.map((repo) => (
        <>
          <h3>{repo.name}</h3>
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
        </>
      ))}
    </>
  );
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

export default ProjectsPage;

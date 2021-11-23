import React, { useEffect, useState } from 'react';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { StyledPage } from '../StyledPage/StyledPage.style';
import ProjectsWrapper from '../../organisms/ProjectWrapper/ProjectWrapper';

const ProjectsPage = ({ repos }) => {
  const [images, setImages] = useState([]);

  const getCoverImage = async () => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_TOKEN}&query=technology&page=1&per_page=${repos.length}`
    );
    const images = await res.json();

    setImages(images.results);
  };

  useEffect(() => {
    getCoverImage();
  }, []);

  return (
    <StyledPage>
      <SectionTitle title="Projects" description="Dolor Sit Amet" />
      {repos.map((repo, index) => (
        <ProjectsWrapper key={repo.id} repo={repo} image={images[index]?.urls.regular} />
      ))}
    </StyledPage>
  );
};

export default ProjectsPage;

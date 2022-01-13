import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { ParagraphWithIcon, StyledPage } from '../StyledPage/StyledPage.style';
import ProjectsWrapper from '../../organisms/ProjectWrapper/ProjectWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blasts } from '../../../assets/data/blastFromThePast';

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
        <ProjectsWrapper key={repo.id} repo={repo} image={images[index]?.urls.small} />
      ))}
      <Link href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`} passHref>
        <ParagraphWithIcon as="a" target="_blank">
          See more on <FontAwesomeIcon icon={['fab', 'github-square']} />
        </ParagraphWithIcon>
      </Link>
      <SectionTitle title="Blast from the Past" description="Much, MUCH older projects" />
      {blasts.map((blast) => (
        <ProjectsWrapper key={blast.name} repo={blast} image={blast.image} />
      ))}
    </StyledPage>
  );
};

export default ProjectsPage;

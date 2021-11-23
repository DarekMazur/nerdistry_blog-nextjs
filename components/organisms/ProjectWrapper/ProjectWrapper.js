import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import { ProjectSection, StyledProjectsWrapper } from '../../pages/StyledPage/StyledPage.style';
import { dateToDisplay } from '../../../utils/helpers';

const ProjectsWrapper = ({ repo, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to([titleRef.current, imageRef.current.children, contentRef.current], {
      x: '-=50vw',
      duration: 0.5,
      stagger: 0.05,
    });
  }, []);

  const handleClick = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <StyledProjectsWrapper>
      <ProjectSection ref={titleRef}>
        <SectionTitle isProject description={repo.name} />
      </ProjectSection>
      <ProjectSection ref={imageRef} onClick={handleClick} isCurtain>
        <img src={image} alt="" />
        <SectionTitle isProject title={isOpen ? 'Hide details' : 'Show details'} />
      </ProjectSection>
      <ProjectSection ref={contentRef} onClick={handleClick}>
        <p>{repo.description}</p>
        <p>Stack: {repo.language}</p>
        <p>Created at: {dateToDisplay(repo.updated_at)}</p>
        <p>
          {repo.homepage ? (
            <Link href={repo.homepage}>
              <a target="_blank">Visit project page</a>
            </Link>
          ) : (
            <p>Work in progress</p>
          )}
        </p>
        <p>[click to close]</p>
      </ProjectSection>
    </StyledProjectsWrapper>
  );
};

export default ProjectsWrapper;

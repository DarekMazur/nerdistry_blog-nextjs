import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import SectionTitle from '../../molecules/SectionTitle/SectionTitle';
import {
  ButtonContent,
  Pointer,
  ProjectSection,
  StyledButton,
  StyledProjectsWrapper,
  TechnologiesWrapper,
} from '../../pages/StyledPage/StyledPage.style';
import { dateToDisplay } from '../../../utils/helpers';

const ProjectsWrapper = ({ repo, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const tl = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const getTech = async () => {
    const res = await fetch(repo.languages_url);
    const techStackObj = await res.json();
    const techStack = Object.keys(techStackObj);
    setTechnologies(techStack);
  };

  useEffect(() => {
    getTech();
  }, []);

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

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  // const test = (e) => {
  //   const content = e.target.innerHTML;
  //   navigator.clipboard.writeText(content);
  // };

  return (
    <StyledProjectsWrapper>
      <ProjectSection ref={titleRef}>
        <SectionTitle isProject description={repo.name} />
      </ProjectSection>
      <ProjectSection ref={imageRef} onClick={handleClick} isCurtain>
        <img src={image} alt="" />
        <SectionTitle isProject title={isOpen ? 'Hide details' : 'Show details'} />
      </ProjectSection>
      <ProjectSection ref={contentRef} isDetails>
        <p>
          <i>{repo.description}</i>
        </p>
        <TechnologiesWrapper>
          <p>
            <strong>Stack: </strong>
          </p>
          <ul>
            {technologies?.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </TechnologiesWrapper>
        <p>
          <strong>Created at: </strong>
          {dateToDisplay(repo.updated_at)}
        </p>
        <p>
          {repo.homepage ? (
            <Link href={repo.homepage} passHref>
              <StyledButton as="a" target="_blank" onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave} isMouseOver={isMouseOver}>
                <span>Visit project page</span>
                <span>Click to visit!</span>
              </StyledButton>
            </Link>
          ) : (
            <p>
              <i>-- work in progress --</i>
            </p>
          )}
        </p>
        <Pointer onClick={handleClick}>[click to close]</Pointer>
      </ProjectSection>
    </StyledProjectsWrapper>
  );
};

export default ProjectsWrapper;

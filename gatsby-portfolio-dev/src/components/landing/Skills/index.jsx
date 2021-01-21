import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
// import dev from 'assets/illustrations/skills.svg';
import social from './socials.json';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          {/* <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" /> */}
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
          I love building software, and have spent the last several years working on a wide range
          of applications from frontend to backend. I especially enjoy my work on DeFi projects!
          I'm passionate about creating in general, and have built a successful business around 
          making both lifestyle and educational tech content on social. When I'm not coding, I 
          enjoy traveling, hiking, and following basketball.
          </p>
          {/* <Button as={AnchorLink} href="#contact">
            Hire me
          </Button> */}
          {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

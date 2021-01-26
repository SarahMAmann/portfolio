import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import social from './socials.json';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import toolbox from 'assets/illustrations/toolbox.svg';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={toolbox} alt="programming languages and tools I know" />
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
          {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="42" src={icon} alt={name} />
          </a>
        ))}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import sarahDevIcon from 'assets/illustrations/sarahDevIcon.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>hello!</h1>
          <h4>I'm Sarah, a software engineer in Chicago</h4>
          <Button as={AnchorLink} href="#contact">
            Work With Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={sarahDevIcon} alt="I’m Sarah, a software engineer in Chicago!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

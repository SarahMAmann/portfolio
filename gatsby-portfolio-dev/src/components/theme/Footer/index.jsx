import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Sarah Benson</h2>
        <span>
          © Let's not pretend I copyrighted this | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>
        </span>
      </Details>
      <Links>
        {/* {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))} */}
        <a href="https://peachhousestudio.com" target="_blank">check out my store ⇢</a>
      </Links>
    </Flex>
  </Wrapper>
);

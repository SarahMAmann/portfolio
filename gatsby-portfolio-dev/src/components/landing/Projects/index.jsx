import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //                 languages(first: 3) {
  //                   nodes {
  //                     id,
  //                     name
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  return (
    <Wrapper as={Container} id="projects">
      <h2>Project Highlights</h2>
      <Grid>
        <Item key={1} as="a" href={''} target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>test</h4>
              <p>description</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"}/>
                  <span>5</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"}/>
                  <span>1</span>
                </div>
              </Stats>
              <Languages>
                {<span key={1}>name</span>}
              </Languages>
            </TitleWrap>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};

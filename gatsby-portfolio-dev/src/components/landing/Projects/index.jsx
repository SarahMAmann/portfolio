import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, ViewLive } from './styles';
import projects from './projects.json';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const showViewLive = true;
  return (
    <Wrapper as={Container} id="projects">
      <h2>Project Highlights</h2>
      <Grid>
      {projects.map((project) => (
        <Item key={project.id} rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </Content>
            {/* <img src={project.imageUrl} /> */}
            <TitleWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"}/>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"}/>
                </div>
              </Stats>
              {project.showViewLive ? 
                <ViewLive as="a" href={project.link} target="_blank" rel="noopener noreferrer">
                    {<span key={project.id}>view live</span>}
                </ViewLive> 
              : null}
            </TitleWrap>
          </Card>
        </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

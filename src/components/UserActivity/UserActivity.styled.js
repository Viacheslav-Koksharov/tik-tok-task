import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const ActivityStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
`;

const FollowerStyled = styled.li`
  font-size: 14px;

  &::before {
    display: block;
    content: '✅';
    color: #0c0c0c;
    font-size: 20px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    align-items: baseline;
  }
`;

const FollowingStyled = styled.li`
  font-size: 14px;

  &::before {
    display: block;
    content: '☑️';
    color: #0c0c0c;
    font-size: 20px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    align-items: baseline;
  }
`;

const VideoStyled = styled.li`
  font-size: 14px;

  &::before {
    display: block;
    content: '🎥';
    color: #0c0c0c;
    font-size: 20px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    align-items: baseline;
  }
`;

const HeartStyled = styled.li`
  font-size: 14px;

  &::before {
    display: block;
    content: '🖤';
    color: #0c0c0c;
    font-size: 20px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    align-items: baseline;
  }
`;

const DiggStyled = styled.li`
  font-size: 14px;

  &::before {
    display: block;
    content: '💬';
    color: #0c0c0c;
    font-size: 20px;
  }

  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    align-items: baseline;
  }
`;

export {
  ActivityStyled,
  DiggStyled,
  FollowerStyled,
  FollowingStyled,
  VideoStyled,
  HeartStyled,
};

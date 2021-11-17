import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const VideoListStyled = styled.ul`
  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
const VideoItemStyled = styled.li`
    max-width: ${main.mobile}px;
    margin: 0 auto 15px;
    padding: 0px;    
    border-radius: 5px;

    @media screen and (min-width: ${main.tablet}px) {
        display: flex;
        flex-direction: column;
        margin: 0 auto 25px;
        justify-content: space-between;
        align-items: flex-start;
		width: calc((100% - 10px) / 2 );
	}

    @media screen and (min-width: ${main.desktop}px) {
		width: calc((100% - 10px) / 3 );
	}
 }`;

const ContainerStyled = styled.div`
  position: relative;
  @media screen and (min-width: ${main.tablet}px) {
    align-self: center;
    width: 100%;
  }
`;

const PlayCountStyled = styled.div`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-bottom: 5px;
`;

const ImageCountStyled = styled.img`
  margin-right: 15px;
`;

const CounterStyled = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export {
  VideoListStyled,
  VideoItemStyled,
  ContainerStyled,
  PlayCountStyled,
  ImageCountStyled,
  CounterStyled,
};

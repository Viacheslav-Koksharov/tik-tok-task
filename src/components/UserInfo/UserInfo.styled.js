import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const ContainerStyled = styled.div`
  margin: 0 auto 15px;
  width: 70px;
  height: 70px;

  @media screen and (min-width: ${main.desktop}px) {
    width: 40px;
    height: 40px;
  }
`;

const ImageStyled = styled.img`
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

const TextStyled = styled.p`
  margin: 0 0 15px 0;
  text-align: center;
  font-size: 25px;

  @media screen and (min-width: ${main.desktop}px) {
    font-size: 30px;
  }
`;

export { ContainerStyled, ImageStyled, TextStyled };

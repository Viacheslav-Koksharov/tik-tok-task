import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const ContainerStyled = styled.div`
  max-width: ${main.mobile}px;
  margin: 0px auto;
  padding: 15px;

  @media screen and (min-width: ${main.tablet}px) {
    max-width: ${main.tablet}px;
  }

  @media screen and (min-width: ${main.desktop}px) {
    max-width: ${main.desktop}px;
    padding: 25px;
  }
`;

export { ContainerStyled };

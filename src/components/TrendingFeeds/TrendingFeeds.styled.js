import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const ListStyled = styled.ul`
  @media screen and (min-width: ${main.tablet}px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ItemStyled = styled.li`
    max-width: ${main.mobile}px;
    margin: 0 auto 25px;
    padding: 20px;
    border: 2px solid #ff6b08;
    border-radius: 5px;

    @media screen and (min-width: ${main.tablet}px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
		width: calc((100% - 30px) / 2);
	}

    @media screen and (min-width: ${main.desktop}px) {
		width: calc((100% - 120px) / 3);
	}
}`;

const ContainerStyled = styled.div`
  @media screen and (min-width: ${main.tablet}px) {
    align-self: center;
  }
`;

export { ListStyled, ItemStyled, ContainerStyled };

import styled from 'styled-components';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const VideoContainerStyled = styled.div`
    width: 250px;
    height: 420px;
    margin: 0 auto 15px;
    padding: 0;

    @media screen and (min-width: ${main.desktop}px) {
        width: 200px;
        height: 300px;
	}
}`;

export { VideoContainerStyled };

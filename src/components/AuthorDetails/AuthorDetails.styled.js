import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from '../../styles/variables.js';

const { main } = breakpoints;

const LinkStyled = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px;
`;

const ContainerStyled = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 10px;

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
  font-size: 16px;

  @media screen and (min-width: ${main.desktop}px) {
    font-size: 14px;
  }
`;

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const ItemStyled = styled.li`
  margin-right: 15px;
  font-size: 14px;

  &:last-child {
    margin-right: 0px;
  }

  &::before {
    margin: 0;
    content: '#';
    color: #ff6b08;
    font-size: 14px;
  }
`;

export {
  LinkStyled,
  ContainerStyled,
  ImageStyled,
  TextStyled,
  ListStyled,
  ItemStyled,
};

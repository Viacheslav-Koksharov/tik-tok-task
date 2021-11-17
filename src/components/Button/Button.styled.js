import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  width: 150px;
  height: 50px;
  background-color: #ff6b08;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 5px;

  &:hover {
    background-color: #eb5e00;
    transform: scale(1.1);
  }
`;

export { ButtonStyled };

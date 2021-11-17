import styled from 'styled-components';

const ActivityStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentStyled = styled.li`
  margin-right: 10px;
  font-size: 14px;

  &::before {
    margin: 0;
    content: '💬';
    color: #0c0c0c;
    font-size: 20px;
  }
`;

const HeartStyled = styled.li`
  margin-right: 10px;
  font-size: 14px;

  &::before {
    margin: 0;
    content: '🖤';
    color: #0c0c0c;
    font-size: 20px;
  }
`;

export { ActivityStyled, CommentStyled, HeartStyled };

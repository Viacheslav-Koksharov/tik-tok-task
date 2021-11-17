import {
    ActivityStyled, CommentStyled, HeartStyled
} from './AdditionalAuthor.styled.js';

const AdditionalAuthor = ({author}) => {
    return (
        <ActivityStyled>
            <CommentStyled>{author.commentCount}</CommentStyled>
            <HeartStyled>{author.authorMeta.heart / 1000000} M</HeartStyled>
        </ActivityStyled>
    )
}

export default AdditionalAuthor;
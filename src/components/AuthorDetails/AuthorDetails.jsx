import {
    LinkStyled,
    ContainerStyled,
    ImageStyled,
    TextStyled,
    ListStyled,
    ItemStyled
} from './AuthorDetails.styled.js';

const AuthorDetails = ({author}) => {
    return (
        <>
            {/* <LinkStyled exact to='/author'> */}
            <LinkStyled to='/author'>
                <ContainerStyled>
                    <ImageStyled src={author.authorMeta.avatar} alt={author.authorMeta.nickName}/>
                </ContainerStyled>
                <TextStyled>{author.authorMeta.name}</TextStyled>
            </LinkStyled>            
            <TextStyled>{author.text}</TextStyled>
            {author.hashtags.length > 0 && <ListStyled>{author.hashtags.map(hash => (
                <ItemStyled key={hash.id}>{hash.name}</ItemStyled>
            ))}</ListStyled>}
        </>
    )
}

export default AuthorDetails;
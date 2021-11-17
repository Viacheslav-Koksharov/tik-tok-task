import { ContainerStyled, ImageStyled, TextStyled } from './UserInfo.styled.js';
import  Button  from '../Button';


function UserInfo({ currentUser }) {
    return (
        <>
            <ContainerStyled>
                <ImageStyled src={currentUser.avatarThumb} alt={currentUser.nickname} />
            </ContainerStyled>
            <TextStyled>{currentUser.uniqueId}</TextStyled>
            <Button aria-label='Subscribe'>Subscribe</Button>
        </>
  )
}

export default UserInfo;
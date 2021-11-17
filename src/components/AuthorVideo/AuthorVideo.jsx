import {
    VideoContainerStyled
} from './AuthorVideo.styled.js';

const AuthorVideo = ({video})=> {
    return (
        <VideoContainerStyled>
            <video
                src={video.videoUrl}
                poster={video.covers.dynamic}
                width='100%'
                height='100%'                    
                controls
                preload="auto"
            ></video>
        </VideoContainerStyled>
    )
}

export default AuthorVideo;
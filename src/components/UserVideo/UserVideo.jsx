import { VideoListStyled, VideoItemStyled, ContainerStyled, PlayCountStyled, ImageCountStyled, CounterStyled  } from './UserVideo.styled.js';
import play from '../../play.svg'


function UserInfo({ currentClips }) {
    
    return (        
        <VideoListStyled >
            {currentClips.map((item) =>(
                <VideoItemStyled key={item.id} >
                    <ContainerStyled>
                        <PlayCountStyled>
                            <ImageCountStyled src={play} alt={'cat'} />
                            <CounterStyled>{item.stats.playCount}</CounterStyled>
                        </PlayCountStyled>
                        <video src={item.video.playAddr}                    
                            width='100%'
                            height='100%'                    
                            controls
                            preload="auto">
                        </video>                         
                    </ContainerStyled>                    
                </VideoItemStyled>))}
        </VideoListStyled>       
  )
}

export default UserInfo;
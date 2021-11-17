import { ActivityStyled, DiggStyled, FollowerStyled, FollowingStyled, VideoStyled, HeartStyled} from './UserActivity.styled.js';



function UserActivity({ currentStats }) {
    return (
        <ActivityStyled>
            <FollowingStyled>{currentStats.followingCount}</FollowingStyled>
            <FollowerStyled>{currentStats.followerCount / 1000} K</FollowerStyled>
            <VideoStyled>{currentStats.videoCount}</VideoStyled>
            <HeartStyled>{currentStats.heart / 1000000} M</HeartStyled>
            <DiggStyled>{currentStats.diggCount}</DiggStyled>            
        </ActivityStyled>
  )
}

export default UserActivity;
import UserInfo from '../../components/UserInfo';
import UserActivity from '../../components/UserActivity';
import UserVideo from '../../components/UserVideo';

import feeds from '../../servises/user-feed.js'

function AuthorPage() {
  const user = feeds.itemList[0].author  
  const userStats = feeds.itemList[0].authorStats;
  const userData = feeds.itemList;  
  
    
  
     return (
        <>
          <UserInfo currentUser={user} />
          <UserActivity currentStats={userStats} />
          <UserVideo currentClips={userData} />       
        </>
    )
}

export default AuthorPage;
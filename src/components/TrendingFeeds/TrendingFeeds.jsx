import AuthorDetails from '../AuthorDetails';
import AuthorVideo from '../AuthorVideo';
import AdditionalAuthor from '../AdditionalAuthor';
import { ListStyled, ItemStyled, ContainerStyled } from './TrendingFeeds.styled.js';

function TrendingFeeds ({trendingFeeds}) {
    return (
      <ListStyled>
            {trendingFeeds.map((item) => (
              <ItemStyled key={`${item.id}${item.createTime}`}>
                <AuthorDetails author={item} />
                <ContainerStyled>
                  <AuthorVideo video={item} />
                    <AdditionalAuthor author={item} />
                </ContainerStyled>
              </ItemStyled>
              ))}
       </ListStyled>
  )
}

export default TrendingFeeds;



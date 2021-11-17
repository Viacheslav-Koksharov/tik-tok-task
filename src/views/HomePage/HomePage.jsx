import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { MdArrowUpward } from 'react-icons/md';
import { fetchTrendingFeed } from '../../servises/apiTikTok.js';
import { scrollTop } from '../../servises/utils.js';
import PageTitle from '../../components/PageTitle';
import TrendingFeeds from '../../components/TrendingFeeds';
import Spinner from '../../components/Spinner';
import IconButton from '../../components/IconButton';

function HomePage() {
    const [trendingFeeds, setTrendingFeeds] = useState([]);
    const { isLoading, error, data, isSuccess } = useQuery("content", () =>
        fetchTrendingFeed()
    );

    useEffect(() => {
        if (data) {
            setTrendingFeeds(data);
        }
    }, [data]);
    
    return (
        <>
            {isLoading && <Spinner />} 
            {isSuccess && (trendingFeeds &&
                <>
                    <PageTitle/>
                    <TrendingFeeds trendingFeeds={trendingFeeds} />
                    <IconButton
                        aria-label='Up'
                        onClick={scrollTop}
                    >
                        <MdArrowUpward size={'2em'} color={'rgb(248, 100, 14)'} />
                    </IconButton>
                </>)}
            {error && <p>Error occurred!</p>}
        </>
    )
}

export default HomePage;
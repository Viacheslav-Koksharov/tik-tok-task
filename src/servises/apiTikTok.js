const URL = 'https://tiktok33.p.rapidapi.com/';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
};

const response = response => {
  if (response.status !== 200) {
    return Promise.reject(new Error('Network response was not ok'));
  }
  return Promise.resolve(response);
};

const json = response => {
  return response.json();
};

const fetchTrendingFeed = () => {
  const TrendingURL = `${URL}trending/feed`;
  return fetch(TrendingURL, options).then(response).then(json);
};

// const fetchUserInfo = ({ userId }) => {
//     const UserInfoURL = `${URL}user/info/{ userId }`;
//     return fetch(UserInfoURL, options).then(response).then(json);
// };

// const fetchUsergFeed = ({ userId }) => {
//     const UsergFeedURL = `${URL}user/feed/{ userId }`;
//     return fetch(UsergFeedURL, options).then(response).then(json);
// };

export { fetchTrendingFeed };

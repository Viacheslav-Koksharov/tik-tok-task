import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import Container from '../Container';
import Spinner from '../Spinner';
import './App.css';

const HomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName: "home-page" */),
);

const AuthorPage = lazy(() =>
  import('../../views/AuthorPage' /* webpackChunkName: "author-page" */),
);

const queryClient = new QueryClient();

function App() {
  return (
      <Container>
        <QueryClientProvider client={queryClient}>

          <Suspense fallback={<Spinner />}>
            <Routes>

              <Route path="/" element={<HomePage />} />
              <Route path="/author" element={<AuthorPage />}/>
              
            </Routes>
          </Suspense>

        </QueryClientProvider>
      </Container>
  );
}

export default App;
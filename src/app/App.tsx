import { Suspense } from 'react';
import './styles/App.css';
import './styles/reset.css';

export const App = () => {
  return <Suspense fallback='Loading...'>{/* <MainLayout /> */}</Suspense>;
};

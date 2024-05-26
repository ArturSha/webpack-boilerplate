import { Suspense } from 'react';
import './styles/App.css';
import './styles/reset.css';

export const App = () => {
  const testing = 12345;
  const testing2 = '12345';
  const testing3 = '12345';
  return <Suspense fallback="Loading...">{/* <MainLayout /> */}hello</Suspense>;
};

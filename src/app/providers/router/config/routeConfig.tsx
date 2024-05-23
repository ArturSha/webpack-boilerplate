import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //     path: '/about',
      //     element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
      // },
      // {
      //     path: '/shop',
      //     element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
      // },
    ],
  },
]);

import { createBrowserRouter } from 'react-router-dom';

import { App } from '../../../App';

export const router = createBrowserRouter([
  {
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
    element: <App />,
    path: '/',
  },
]);

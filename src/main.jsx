import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import NewPost, { action as newPostAction } from './routes/NewPost.jsx';
import RootLayout from './routes/RootLayout';
import Posts from './routes/Posts.jsx';
import { loader as postLoader } from './components/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

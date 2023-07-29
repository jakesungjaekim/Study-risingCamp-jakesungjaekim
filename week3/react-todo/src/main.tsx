import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Todo from './Todo.tsx';
import Test from './Test.tsx';
import Count from './Count.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: 'test',
        element: <Test />,
      },
      {
        path: 'count',
        element: <Count />,
      }
    ]
  },
  {
    path: '/test',
    element: <App />,
  }
])

const el = document.getElementById('root') as HTMLElement;
const root = createRoot(el!);

root.render(
  <RouterProvider router={router} />
)
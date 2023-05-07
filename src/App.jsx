import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import DetailPage from './pages/DetailPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/:id', element: <DetailPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

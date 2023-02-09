import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './ErrorPage';

const router = createBrowserRouter([
  { 
    path: '/root', 
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },    
    ] 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Fetcher from './pages/Fetcher';

import Root from './pages/Root';
import Error from './ErrorPage';
import { headerAPI } from './features/counter/headerDataAPI';
import { action as productsAction } from './pages/Products';
import { action as fetcherAction } from './pages/Fetcher';

async function getData() {
  const headerData = await headerAPI();
  return headerData;
};

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />,
    id: 'root-component',
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { 
        path: 'products', 
        element: <Products />,
        action: productsAction,
        loader: () => {
          return defer({
            header: getData()
          })
        },
      },
      { 
        path: 'prompt', 
        element: <Fetcher />,
        action: fetcherAction
      },    
    ] 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

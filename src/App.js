
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import Products from './pages/Products';
import { Root } from './pages/Root';
import data from './Store.js/data';
import Product from './pages/product';
const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/1', element: <Product id='1' data={data} /> },
      { path: '/products/2', element: <Product id='2' data={data} /> },
      { path: '/products/3', element: <Product id='3' data={data} /> },
      { path: '/products/4', element: <Product id='4' data={data} /> },
    ],
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
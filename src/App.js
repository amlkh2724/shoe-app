
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import Products from './pages/FormInputs';
import { Root } from './pages/Root';
const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
    ],
  },
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
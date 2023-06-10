
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Privacy from './Components/Privacy/Privacy';

function App() {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/privacy',
              element: <Privacy></Privacy>
            }
        ]
    }
])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

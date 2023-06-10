
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Privacy from './Components/Privacy/Privacy';
import TermsCondition from './Components/TermsCondition/TermsCondition';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Advertise from './Components/Advertise/Advertise';

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
            },
            {
              path: '/terms&condition',
              element: <TermsCondition></TermsCondition>
            },
            {
              path: '/aboutUs',
              element: <About></About>
            },
            {
              path: '/contactUs',
              element: <ContactUs></ContactUs>
            },
            {
              path: '/advertisement',
              element: <Advertise></Advertise>
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

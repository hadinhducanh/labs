import { Navigate, useRoutes } from 'react-router-dom';

import Film from './film';
import Contact from './contact/Contact';
import FilmDetail from './film/Filmdetail';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    { path: 'film', element: <Film /> },
    {
      path: '*',
      element: <Navigate to="/film" replace />,
    },
    {
        path: 'contact', element: <Contact />
    },
    {
        path: '/detail/:filmId',
         element: <FilmDetail/>
    },
    


    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}

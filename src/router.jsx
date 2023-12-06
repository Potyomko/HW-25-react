import { App } from "components/App";
import { createBrowserRouter } from "react-router-dom";
import { Home } from 'components/pages/Home';
import { MoviesList } from 'components/pages/MoviesList';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/movies',
                element: <MoviesList/>,
            }
        ]
    }
])
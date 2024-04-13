import { createBrowserRouter } from 'react-router-dom'; 
import Home from '@/pages/Home';
import About from '@/pages/About';

import HeaderNav from '@/pages/components/HeaderNav';

const router = createBrowserRouter([
    {
        element: <HeaderNav />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            }
        ],
    },
]);

export default router;
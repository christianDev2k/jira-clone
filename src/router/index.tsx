import { AuthLayout, MainLayout } from 'components';
import { PATH } from 'constant';
import { CyberBoard, Login, SignUp } from 'pages';
import { RouteObject } from 'react-router-dom';

const router: RouteObject[] = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.signUp,
                element: <SignUp />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <CyberBoard />,
            },
        ],
    },
];

export default router;

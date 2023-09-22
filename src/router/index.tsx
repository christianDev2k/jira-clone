import { AuthLayout, MainLayout } from 'components';
import { PATH } from 'constant';
import { CreateProject, CyberBoard, Login, ProjectManagement, SignUp, UserManagement } from 'pages';
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
            {
                path: PATH.projectManagement,
                element: <ProjectManagement />,
            },
            {
                path: PATH.createProject,
                element: <CreateProject />,
            },
            {
                path: PATH.userManagement,
                element: <UserManagement />,
            },
        ],
    },
];

export default router;

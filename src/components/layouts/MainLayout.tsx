import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='flex'>
            <div className='w-4/12'>Sidebar</div>
            <div className='w-8/12'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;

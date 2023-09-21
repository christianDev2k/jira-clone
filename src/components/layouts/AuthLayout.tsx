import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>Carousel</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;

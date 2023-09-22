import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayout = () => {
    return (
        <AuthLayoutStyled className='flex justify-center items-center'>
            <Container className='px-[55px] pt-[65px] pb-[54px]'>
                <Outlet />
            </Container>
        </AuthLayoutStyled>
    );
};

const AuthLayoutStyled = styled.div`
    background-image: url('/images/auth/bg-01.jpg');
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const Container = styled.div`
    width: 500px;
    background: var(--white-color);
    border-radius: var(--radius-10);
    overflow: hidden;
`;

export default AuthLayout;

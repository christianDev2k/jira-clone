import { useEffect } from 'react';
import { MenuItem, Header, Footer } from 'components';
import { PATH } from 'constant';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';

const menuItems = [
    {
        title: 'Jira Board',
        path: PATH.jiraBoard,
        icon: <i className='fa-solid fa-chart-line'></i>,
    },
    {
        title: 'Project Management',
        path: PATH.projectManagement,
        icon: <i className='fa-solid fa-gears'></i>,
    },
    {
        title: 'User Management',
        path: PATH.userManagement,
        icon: <i className='fa-solid fa-users'></i>,
    },
];

const MainLayout = () => {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);

    const handleSidebar = (active: boolean) => () => {
        setIsSidebarActive(active);
    };

    const handleResize = () => {
        window.innerWidth > 1024 ? setIsSidebarActive(true) : setIsSidebarActive(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container>
            {/* Sidebar  */}
            <div
                className={cn('side-bar', {
                    active: isSidebarActive,
                })}
            >
                <button
                    className='p-2 absolute top-0 right-2 hover:opacity-60 transition lg:hidden'
                    onClick={handleSidebar(false)}
                >
                    <i className='fa-solid fa-xmark'></i>
                </button>
                <div className='logo text-center uppercase font-bold py-6'>
                    <img src='/images/logo/logo.png' alt='logo jira' className='w-20 mx-auto' />
                    <span>JIRA</span>
                </div>
                <ul className='menu'>
                    {menuItems.map(item => (
                        <MenuItem key={item.title} items={item} />
                    ))}
                </ul>
                <div className='absolute bottom-0 left-0 w-full p-4 text-center'>
                    <div className='text-4xl mb-1'>
                        <i className='fa-regular fa-circle-user'></i>
                    </div>
                    <p className='font-semibold'>Nguyễn Hoàng Ngọc Khánh</p>
                    <button className='text-sm underline text-[var(--title-primary-color)] p-1'>Đăng xuất</button>
                </div>
            </div>

            {/* Content  */}
            <div className='content'>
                <Header callback={setIsSidebarActive} />

                <div
                    onClick={() => {
                        if (window.innerWidth < 1024) setIsSidebarActive(false);
                    }}
                >
                    <Outlet />
                </div>

                <Footer />
            </div>
        </Container>
    );
};

const Container = styled.div`
    --sidebar-width: 270px;

    .side-bar {
        position: fixed;
        left: calc(var(--sidebar-width) * -1);
        top: 0;
        height: 100vh;
        padding-bottom: 50px;
        width: var(--sidebar-width);
        max-width: 100%;
        z-index: 999;
        overflow: hidden;
        overflow-y: auto;
        transition: 0.5s;
        box-shadow: 0 12px 30px rgba(80, 143, 244, 0.1);
        background-color: var(--white-color);

        .logo {
            font-size: var(--fz-32);
            letter-spacing: 4px;
            color: var(--blue-950);
        }

        &.active {
            left: 0;

            & ~ .content {
                padding-left: var(--sidebar-width);
            }
        }
    }

    .content {
        background-color: var(--primary-bg-content);
        padding-left: 0;
        transition: 0.5s;
    }
`;

export default MainLayout;

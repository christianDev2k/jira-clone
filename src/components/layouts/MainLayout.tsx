import { useEffect } from 'react';
import { MenuItem } from 'components';
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
        title: 'Create Project',
        path: PATH.createProject,
        icon: <i className='fa-solid fa-plus'></i>,
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
            <div
                className='content h-screen'
                onClick={() => {
                    if (window.innerWidth < 1024) setIsSidebarActive(false);
                }}
            >
                <Header className='relative px-5 py-3 bg-[var(--white-color)] flex justify-between'>
                    {/* Toggle bar  */}
                    <button
                        className='text-xl leading-none text-[var(--blue-600)]'
                        onClick={() => setIsSidebarActive(pre => !pre)}
                    >
                        <i className='fa-solid fa-bars'></i>
                    </button>

                    {/* Search / icon  */}
                    <div className='flex items-center'>
                        <div className='icon relative top-[1px]'>
                            <i className='fa-regular fa-bell'></i>
                        </div>
                        <div className='icon relative top-[1px]'>
                            <i className='fa-regular fa-message'></i>
                        </div>
                        <div className='relative search-input'>
                            <input type='text' placeholder='Search here...' className='search-field' />
                            <button className='search-btn flex items-center'>
                                <i className='fa-solid fa-magnifying-glass'></i>
                            </button>
                        </div>
                    </div>
                </Header>
                <Outlet />
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

const Header = styled.div`
    .search-input {
        .search-field {
            color: var(--title-primary-color);
            font-size: var(--fz-12);
            height: 40px;
            padding-left: 50px;
            border: 0;
            padding-right: 15px;
            background: 0 0;
            border-radius: 30px;
            border: 0;
            border: 1px solid var(--primary-border-color);
            font-weight: 400;
        }
        .search-btn {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            background: 0 0;
            font-size: var(--fz-13);
            border: 0;
            padding-left: 20px;
            padding-right: 13px;
            color: var(--blue-500);
        }
    }

    .icon {
        margin-right: var(--m-30);
        font-size: var(--fz-18);
        color: var(--blue-600);
        cursor: pointer;
    }
`;

export default MainLayout;

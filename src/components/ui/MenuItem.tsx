import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type MenuItemProps = {
    items: {
        path: string;
        icon: JSX.Element;
        title: string;
    };
};

const MenuItem: React.FC<MenuItemProps> = ({ items: { path, icon, title } }) => {
    return (
        <MenuItemStyled>
            <NavLink to={path} className='item-link block'>
                <span className='icon'>{icon}</span>
                <span className='title'>{title}</span>
            </NavLink>
        </MenuItemStyled>
    );
};

const MenuItemStyled = styled.li`
    .item-link {
        padding: var(--p-12) var(--p-20);
        color: var(--text-sidebar);
        cursor: pointer;
        transition: all .25s;

        &:hover,
        &.active {
            background-color: var(--blue-100);
        }

        .icon {
            margin-right: var(--m-16);
            font-size: var(--fz-14);
        }
    }
`;

export default MenuItem;

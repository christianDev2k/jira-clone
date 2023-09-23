import styled from 'styled-components';

type HeaderType = {
    callback: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderType> = ({ callback }) => {
    return (
        <HeaderContainer className='relative px-5 py-3 bg-[var(--white-color)] flex justify-between'>
            {/* Toggle bar  */}
            <button
                className='text-xl leading-none text-[var(--blue-600)]'
                onClick={() => callback((pre: boolean) => !pre)}
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
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
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

export default Header;

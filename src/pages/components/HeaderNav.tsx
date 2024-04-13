import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import clsx from 'clsx';

const HeaderNav: React.FC = () => {

    const wrapper = 'flex justify-between text-white pl-4 pr-6 bg-black items-center text-white h-12 ';
    const title = 'cursor-pointer text-2xl font-bold';
    const nav = 'flex items-center';
    const navItem = 'ml-4 cursor-pointer';
    const active = 'border-b-2 border-white';

    const mainContentRef = React.createRef<HTMLDivElement>();

    const [activeIndex, setActiveIndex] = useState(0);

    const navList = [
        { name: '首页', path: '/' },
        { name: '关于', path: '/about' }
    ];
    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        mainContentRef.current && Scrollbar.init(mainContentRef.current);
    }, []);

    return (
            <div className="flex flex-col h-screen">
                <header className={wrapper}>
                    <div className={title}>React 模板</div>
                    <nav className={nav}>
                        {
                            navList.map((item, index) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={clsx(navItem, activeIndex === index && active)}
                                    onClick={() => handleClick(index)}
                                >
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                </header>
                <div 
                    id="my-scrollbar"
                    className="h-[calc(100vh-3rem)]"
                    ref={mainContentRef}
                >
                    <div className="w-full h-full">
                        <Outlet />
                    </div>               
                </div>
            </div>
    );
};

export default HeaderNav;
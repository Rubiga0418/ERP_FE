import React, { useState } from 'react';
import './sidebar.css';
import logo from '../../../assets/images/logo/apple-icon.png';
import sidebarData from '../../../assets/data/admin_sidebar.json';

function Sidebar({ isOpen }) {
    const [expandedMenu, setExpandedMenu] = useState({});
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Track active submenu

    // Toggle sub-menu visibility, ensuring only one is open at a time
    const toggleSubMenu = (id, level) => {
        setExpandedMenu((prevExpanded) => ({
            ...prevExpanded,
            [level]: prevExpanded[level] === id ? null : id
        }));
        setActiveSubMenu(null); // Reset active submenu when toggling
    };

    const renderSubMenu = (subMenu, level = 1) => {
        return (
            <ul className={`sub-menu level-${level}`}>
                {subMenu.map((subItem) => (
                    <li key={subItem.id} className="sub-menu-item">
                        <a
                            href={subItem.link}
                            className={`sub-menu-item ${activeSubMenu === subItem.id ? 'active' : ''}`} // Apply active class
                            onClick={(e) => {
                                if (subItem.subMenu) {
                                    e.preventDefault();
                                    toggleSubMenu(subItem.id, level);
                                } else {
                                    setActiveSubMenu(subItem.id); // Set active submenu
                                }
                            }}
                        >
                            {subItem.title}
                        </a>
                        {subItem.subMenu && expandedMenu[level] === subItem.id && renderSubMenu(subItem.subMenu, level + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <aside
            className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ${isOpen ? 'show' : 'hide'}`}
            id="sidenav-main"
        >
            <div className="sidenav-header">
                <a className="navbar-brand m-0" href='/adm'>
                    <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold">Deva Raj Dashboard</span>
                </a>
            </div>
            <hr className="horizontal dark mt-0" />
            <div className="w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    {sidebarData.map((item) => (
                        <li className="nav-item my-1" key={item.id}>
                            <a
                                className={`nav-link ${expandedMenu[1] === item.id ? 'active' : ''}`}
                                href={item.link}
                                onClick={(e) => {
                                    if (item.subMenu) {
                                        e.preventDefault();
                                        toggleSubMenu(item.id, 1);
                                    } else {
                                        setActiveSubMenu(item.id); // Set active menu item
                                    }
                                }}
                            >
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className={`${item.icon} text-sm opacity-10`}></i>
                                </div>
                                <span className="nav-link-text ms-1">{item.title}</span>
                            </a>
                            {item.subMenu && expandedMenu[1] === item.id && renderSubMenu(item.subMenu, 2)}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;

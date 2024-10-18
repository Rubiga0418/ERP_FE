import React, { useState, useEffect } from 'react';
import './sidebar.css';

import logo from '../../../assets/images/logo/apple-icon.png';

import adminData from '../../../assets/data/admin_sidebar.json';
import staffData from '../../../assets/data/staff_sidebar.json';
import studentData from '../../../assets/data/student_sidebar.json';

function Sidebar({ isOpen }) {
    const [expandedMenu, setExpandedMenu] = useState({});
    const [activeItem, setActiveItem] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Retrieve user information from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserRole(user.role);
        }
    }, []);

    const getSidebarData = () => {
        switch (userRole) {
            case 'Admin':
                return adminData;
            case 'Staff':
                return staffData;
            case 'Student':
                return studentData;
            default:
                return []; // Return an empty array or a default menu if role is unrecognized
        }
    };

    const sidebarData = getSidebarData();

    const toggleSubMenu = (id, level) => {
        setExpandedMenu((prevExpanded) => {
            // Close all submenus at lower levels
            const newExpanded = { ...prevExpanded };
            for (let i = level; i <= Object.keys(prevExpanded).length; i++) {
                delete newExpanded[i];
            }
            // Toggle the current level's item
            return {
                ...newExpanded,
                [level]: prevExpanded[level] === id ? null : id
            };
        });
        setActiveItem(id);
    };

    const renderSubMenu = (subMenu, level = 1) => (
        <ul className={`sub-menu level-${level}`}>
            {subMenu.map((subItem) => (
                <li key={subItem.id} className={`sub-menu-item mt-3 text-sm level-${level}-item`}>
                    <a
                        href={subItem.link}
                        className={`sub-menu-link ${activeItem === subItem.id ? 'active' : ''}`}
                        onClick={(e) => {
                            if (subItem.subMenu) {
                                e.preventDefault();
                                toggleSubMenu(subItem.id, level);
                            } else {
                                setActiveItem(subItem.id);
                            }
                        }}
                    >
                        {subItem.icon && <i className={`${subItem.icon} me-2`}></i>}
                        {subItem.title}
                    </a>
                    {subItem.subMenu && expandedMenu[level] === subItem.id && (
                        <ul className="nested-submenu">
                            {renderSubMenu(subItem.subMenu, level + 1)}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <nav
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
                        <li className="nav-item my-3 mt-2" key={item.id}>
                            <a
                                className={`nav-link ${expandedMenu[1] === item.id ? 'active' : ''}`}
                                href={item.link}
                                onClick={(e) => {
                                    if (item.subMenu) {
                                        e.preventDefault();
                                        toggleSubMenu(item.id, 1);
                                    } else {
                                        setActiveItem(item.id);
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
        </nav>
    );
}

export default Sidebar;

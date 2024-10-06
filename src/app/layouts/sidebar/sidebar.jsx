import React, { useState } from 'react';
import './sidebar.css';
import logo from '../../../assets/images/logo/apple-icon.png';
import sidebarData from '../../../assets/data/admin_sidebar.json';

function Sidebar({ isOpen }) {
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [selectedSubMenu, setSelectedSubMenu] = useState(null);

    // Toggle sub-menu visibility
    const toggleSubMenu = (id) => {
        setExpandedMenu(expandedMenu === id ? null : id);
    };

    // Handle submenu item click
    const handleSubMenuClick = (subMenuId) => {
        setSelectedSubMenu(subMenuId);
    };

    return (
  
        <aside
        className={`sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 ${isOpen ? 'show' : 'hide'}`}
        id="sidenav-main"
    >
                <div className="sidenav-header">
                    <a className="navbar-brand m-0" href='/adm'>
                        <img src={logo} className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold ">Deva Raj Dashboard</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                    {sidebarData.map((item) => (
                        <li className="nav-item my-1" key={item.id}>
                            <a
                                className={`nav-link ${expandedMenu === item.id ? 'active' : ''}`}
                                href={item.link}
                                onClick={() => toggleSubMenu(item.id)}
                            >
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className={`${item.icon} text-sm opacity-10`}></i>
                                </div>
                                <span className="nav-link-text ms-1">{item.title}</span>
                            </a>
                            {expandedMenu === item.id && item.subMenu && (
                                <ul className="sub-menu">
                                    {item.subMenu.map((subItem) => (
                                        <li
                                            key={`${item.id}-${subItem.id}`} // Combined key for uniqueness
                                            className={`sub-menu-item ${selectedSubMenu === subItem.id ? 'active' : ''} my-2`}
                                            onClick={() => handleSubMenuClick(subItem.id)}
                                        >
                                            <a href={subItem.link}>{subItem.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    </ul>
                </div>
            </aside>

    );
}

export default Sidebar;

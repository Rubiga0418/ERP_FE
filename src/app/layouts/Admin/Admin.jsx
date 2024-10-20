import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import Dashboard from '../../mastermanagement/Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';

import RoomAllocation from '../../mastermanagement/Hostel/Room Allocation/RoomAllocation';

import { Routes, Route } from 'react-router-dom';
import Gatepass from '../../mastermanagement/Hostel/Gatepass/Gatepass';

function Admin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

    // Function to toggle the sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div className={`g-sidenav-show bg-gray-100 ${isSidebarOpen ? 'g-sidenav-pinned' : 'g-sidenav-hidden'}`}>
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            {/* Pass the toggle function to Sidebar */}
            <Sidebar isOpen={isSidebarOpen} />
            <main className="main-content position-relative border-radius-lg">
                <Navbar toggleSidebar={toggleSidebar} />
                <Routes>
                    <Route path='/' element={<DashBoard/>} />
                    <Route path="/Hostel/*" element={<Room/>}/>
                    <Route path='/Gatepass/*' element={<Gate_pass/>}/>
                </Routes>
            </main>
        </div>
    );
}

function DashBoard(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
            </Routes>
        </>
    );
}

function Room(){
    return(
        <>
            <Routes>
                <Route path='/Room-Allocation' element={<RoomAllocation/>}/>
            </Routes>
        </>
    )
}

function Gate_pass(){
    return(
       <>
            <Routes>
                <Route path='/Approved-Gate-Pass' element={<Gatepass/>} />
            </Routes>
       </>
    )
}

export default Admin;

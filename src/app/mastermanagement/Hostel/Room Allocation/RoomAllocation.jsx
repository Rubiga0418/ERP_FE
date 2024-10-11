import React, { useState } from "react";
import Genetable from '../../../layouts/Genetable/Genetable';
import AddRoomAllocation from './AddRoomAllocation/AddRoomAllocation'; // Import AddRoomAllocation component
import './RoomAllocation.css'; // Import custom CSS for modal styling

function RoomAllocation() {
    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

    // Function to handle submission of room allocation
    const handleRoomSubmit = (roomData) => {
        console.log("Room Data Submitted:", roomData);
        // Here you can add logic to save the data (e.g., API call)
        setShowModal(false); // Close modal after submission
    };

    // Sample data for the table
    const authors = [
        {
            name: "John Michael",
            email: "john@creative-tim.com",
            role: "Manager",
            organization: "Organization",
            status: "Online",
            employedDate: "23/04/18",
            imgSrc: "../assets/img/team-2.jpg",
        },
        {
            name: "Alexa Liras",
            email: "alexa@creative-tim.com",
            role: "Programmer",
            organization: "Developer",
            status: "Offline",
            employedDate: "11/01/19",
            imgSrc: "../assets/img/team-3.jpg",
        },
        // ... additional authors can be added here
    ];

    const column_table = [
        {
            display_name: 'name',
            column: 'name'
        },
        {
            display_name: 'email',
            column: 'email'
        },
        {
            display_name: 'role',
            column: 'role'
        },
        {
            display_name: 'organization',
            column: 'organization'
        },
        {
            display_name: 'status',
            column: 'status'
        },
        {
            display_name: 'Employed Date',
            column: 'employedDate'
        }
    ];

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Room Allocation</h2>
                <button className="btn btn-light text-dark" onClick={handleAdd}>
                    Add New
                </button>
            </div>

            {/* Display the authors in a table format */}
            <Genetable data={authors} filterEnabled={false} column={column_table} />

            {/* Custom Modal for adding room allocation */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Room Allocation</h4>
                        <AddRoomAllocation onSubmit={handleRoomSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default RoomAllocation;

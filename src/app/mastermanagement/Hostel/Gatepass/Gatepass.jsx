import React, { useState } from "react";
import Genetable from "../../../layouts/Genetable/Genetable";
import './Gatepass.css';
import AddGatepass from "./AddGatepass/AddGatepass";

function Gatepass(){

    const [showModal, setShowModal] = useState(false);

    // Function to open the modal
    const handleAdd = () => setShowModal(true);
    
    // Function to close the modal
    const handleClose = () => setShowModal(false);

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

    return(
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4">
                <h2 className="h2 font-weight-bolder text-white mb-0">Approved Gate Passes</h2>
                <button className="btn btn-light text-dark"  onClick={handleAdd}>
                    Add New
                </button>
            </div>

            <Genetable data={authors} filterEnabled={false} column={column_table} Title={"Approved Gate Passes"}/>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="modal-close" onClick={handleClose}>&times;</span>
                        <h4>Add Approved Gate Passes</h4>
                        <AddGatepass/>
                    </div>
                </div>
            )}

        </div>
    )

}

export default Gatepass;
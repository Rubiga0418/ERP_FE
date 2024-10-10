import React from "react";
import Genetable from '../../../layouts/Genetable/Genetable';

function RoomAllocation() {
    const handleAdd = () => {
        console.log("Add new author/room");
        // You can add functionality to open a modal or redirect here
    };

    return (
        <div className="container-fluid py-6">
            <div className="d-flex justify-content-between align-items-center mb-2 px-4"> {/* Keep title on the left */}
                <h2 className="h2 font-weight-bolder text-white mb-0">Room Allocation</h2> {/* Title on the left */}
                <button 
                    className="btn btn-light text-dark" // Button with a light background and dark text
                    onClick={handleAdd}
                >
                    Add New
                </button>
            </div>
            <Genetable />
        </div>
    );
}

export default RoomAllocation;

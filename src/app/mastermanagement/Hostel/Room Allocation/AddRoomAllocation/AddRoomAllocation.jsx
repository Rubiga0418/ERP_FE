import React, { useState } from "react";

function AddRoomAllocation() {
  const [formData, setFormData] = useState({
    studentName: "",
    roomNumber: "",
    allocationDate: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Room Allocation Data:", formData);
    // Add code here to handle form submission, like sending data to an API.
  };

  return (
    <div className="container">
      {/* <h2>Room Allocation Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input
            type="text"
            className="form-control"
            id="roomNumber"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="allocationDate" className="form-label">Allocation Date</label>
          <input
            type="date"
            className="form-control"
            id="allocationDate"
            name="allocationDate"
            value={formData.allocationDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddRoomAllocation;

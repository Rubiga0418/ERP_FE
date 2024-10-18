import React, { useState } from "react";

function AddRoomAllocation() {
  const [formData, setFormData] = useState({
    studentName: "",
    roomNumber: "",
    allocationDate: "",
    status: "active",
  });

  const [formErrors, setFormErrors] = useState({}); // State for form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    // Student Name validation
    if (!formData.studentName.trim()) {
      errors.studentName = "Student name is required.";
    }
    
    // Room Number validation
    if (!formData.roomNumber.trim()) {
      errors.roomNumber = "Room number is required.";
    } else if (!/^\d+$/.test(formData.roomNumber)) {
      errors.roomNumber = "Room number must be a valid number.";
    }

    // Allocation Date validation
    if (!formData.allocationDate) {
      errors.allocationDate = "Allocation date is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Room Allocation Data:", formData);
      // Add code here to handle form submission, like sending data to an API.
      // Reset form after successful submission
      setFormData({
        studentName: "",
        roomNumber: "",
        allocationDate: "",
        status: "active",
      });
      setFormErrors({});
    }
  };

  return (
    <div className="container">
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
          {formErrors.studentName && (
            <div className="text-danger">{formErrors.studentName}</div>
          )}
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
          {formErrors.roomNumber && (
            <div className="text-danger">{formErrors.roomNumber}</div>
          )}
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
          {formErrors.allocationDate && (
            <div className="text-danger">{formErrors.allocationDate}</div>
          )}
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

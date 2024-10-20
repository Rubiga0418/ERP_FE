import React, { useState } from "react";
import './AddGatepass.css';

function AddGatepass() {
    const [formData, setFormData] = useState({
        date: '',
        expectedDuration: '',
        employeeName: '',
        employeeEmail: '',
        department: '',
        visitorName: '',
        visitorEmail: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation or API call here with formData
        console.log("Form submitted with data: ", formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    {/* Left column */}
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expectedDuration">Expected Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                id="expectedDuration"
                                name="expectedDuration"
                                value={formData.expectedDuration}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeName"
                                name="employeeName"
                                value={formData.employeeName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="employeeEmail">Employee Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="employeeEmail"
                                name="employeeEmail"
                                value={formData.employeeEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Right column */}
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="department">Department</label>
                            <input
                                type="text"
                                className="form-control"
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="visitorName">Visitor Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="visitorName"
                                name="visitorName"
                                value={formData.visitorName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="visitorEmail">Visitor Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="visitorEmail"
                                name="visitorEmail"
                                value={formData.visitorEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddGatepass;

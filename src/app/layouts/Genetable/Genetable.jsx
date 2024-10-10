import React, { useState } from "react";

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
  // ... other authors
];


function Genetable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterColumn, setFilterColumn] = useState("name");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

  const handleEdit = (authorName) => {
    console.log(`Edit ${authorName}`);
    // Optionally add a modal or redirect to edit page
  };

  const filteredAuthors = authors.filter((author) => {
    const valueToCheck = author[filterColumn]?.toLowerCase() || "";
    const matchesSearchTerm = valueToCheck.includes(searchTerm.toLowerCase());

    const employedDateParts = author.employedDate.split("/");
    const employedDate = new Date(`${employedDateParts[2]}-${employedDateParts[1]}-${employedDateParts[0]}`); // YYYY-MM-DD format
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : null;

    const matchesDateRange =
      (!startDateObj || employedDate >= startDateObj) &&
      (!endDateObj || employedDate <= endDateObj);

    return matchesSearchTerm && matchesDateRange;
  });

  const totalPages = Math.ceil(filteredAuthors.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentAuthors = filteredAuthors.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Authors Table</h6>
              <div className="row mb-3">
                <div className="col-3">
                  <label htmlFor="filterColumn" className="form-label">Filter By</label>
                  <select
                    id="filterColumn"
                    className="form-select"
                    value={filterColumn}
                    onChange={(e) => setFilterColumn(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="role">Role</option>
                    <option value="status">Status</option>
                    <option value="organization">Organization</option>
                  </select>
                </div>
                <div className="col-3">
                  <label htmlFor="searchTerm" className="form-label">Search</label>
                  <input
                    id="searchTerm"
                    type="text"
                    placeholder={`Search by ${filterColumn}...`}
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="startDate" className="form-label">Start Date</label>
                  <input
                    id="startDate"
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="endDate" className="form-label">End Date</label>
                  <input
                    id="endDate"
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3 d-flex justify-content-end align-items-center">
                  <label htmlFor="rowsPerPage" className="form-label me-4 mb-0">Rows Per Page</label>
                  <select
                    id="rowsPerPage"
                    className="form-select"
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset to the first page
                    }}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card-body px-0 pt-0 pb-2 pt-3">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentAuthors.map((author, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src={author.imgSrc} className="avatar avatar-sm me-3" alt={author.name} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">{author.name}</h6>
                              <p className="text-xs text-secondary mb-0">{author.email}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{author.role}</p>
                          <p className="text-xs text-secondary mb-0">{author.organization}</p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className={`badge badge-sm ${author.status === 'Online' ? 'bg-gradient-success' : 'bg-gradient-secondary'}`}>
                            {author.status}
                          </span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">{author.employedDate}</span>
                        </td>
                        <td className="align-middle">
                          <button
                            className="text-secondary font-weight-bold text-xs btn btn-light "
                            onClick={() => handleEdit(author.name)}
                            data-toggle="tooltip"
                            data-original-title="Edit user"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                    {currentAuthors.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center text-secondary">No authors found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center px-5 pb-3 pt-3">
              <button
                className="btn btn-secondary"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}



export default Genetable;
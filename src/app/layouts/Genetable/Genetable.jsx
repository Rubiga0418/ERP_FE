import React from "react";

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
  {
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    role: "Executive",
    organization: "Projects",
    status: "Online",
    employedDate: "19/09/17",
    imgSrc: "../assets/img/team-4.jpg",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    role: "Programmer",
    organization: "Developer",
    status: "Online",
    employedDate: "24/12/08",
    imgSrc: "../assets/img/team-3.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    role: "Manager",
    organization: "Executive",
    status: "Offline",
    employedDate: "04/10/21",
    imgSrc: "../assets/img/team-2.jpg",
  },
  {
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    role: "Programmer",
    organization: "Developer",
    status: "Offline",
    employedDate: "14/09/20",
    imgSrc: "../assets/img/team-4.jpg",
  },
];

function Genetable() {
  const handleEdit = (authorName) => {
    // Handle edit functionality
    console.log(`Edit ${authorName}`);
  };

  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Authors Table</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
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
                      {authors.map((author, index) => (
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
                              className="text-secondary font-weight-bold text-xs"
                              onClick={() => handleEdit(author.name)}
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Genetable;

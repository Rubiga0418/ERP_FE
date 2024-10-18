import React from "react";

const metrics = [
    {
      title: "Today's Money",
      amount: "$53,000",
      percentage: "+55%",
      icon: "ni ni-money-coins",
      bgColor: "bg-gradient-primary shadow-primary",
    },
    {
      title: "Today's Users",
      amount: "2,300",
      percentage: "+3%",
      icon: "ni ni-world",
      bgColor: "bg-gradient-danger shadow-danger",
    },
    {
      title: "New Clients",
      amount: "+3,462",
      percentage: "-2%",
      icon: "ni ni-paper-diploma",
      bgColor: "bg-gradient-success shadow-success",
    },
    {
      title: "Sales",
      amount: "$103,430",
      percentage: "+5%",
      icon: "ni ni-cart",
      bgColor: "bg-gradient-warning shadow-warning",
    }
  ];

  
function Dashboard() {
    return (
       
            <div className="container-fluid py-4">
                <div className="row">
                    {metrics.map((metric, index) => (
                        <MetricCard
                        key={index}
                        title={metric.title}
                        amount={metric.amount}
                        percentage={metric.percentage}
                        icon={metric.icon}
                        bgColor={metric.bgColor}
                        />
                    ))}
                    </div>

                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                        <SalesOverview />
                    </div>
                    <div className="col-lg-5">
                        <Carousel />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                        <SalesByCountry />
                    </div>
                    <div className="col-lg-5">
                        <CategoriesList />
                    </div>
                    {/* <Genetable/> */}
                </div>
            </div>
    
    );
}

// Metric Card Component
const MetricCard = ({ title, amount, percentage, icon, bgColor }) => {
    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">{title}</p>
                                <h5 className="font-weight-bolder">{amount}</h5>
                                <p className="mb-0">
                                    <span className="text-success text-sm font-weight-bolder">{percentage}</span> since yesterday
                                </p>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className={`icon icon-shape ${bgColor} text-center rounded-circle`}>
                                <i className={`${icon} text-lg opacity-10`} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// Sales Overview Component
const SalesOverview = () => {
    return (
        <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
                <h6 className="text-capitalize">Sales overview</h6>
                <p className="text-sm mb-0">
                    <i className="fa fa-arrow-up text-success"></i>
                    <span className="font-weight-bold">4% more</span> in 2021
                </p>
            </div>
            <div className="card-body p-3">
                <div className="chart">
                    <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                </div>
            </div>
        </div>
    );
};

// Carousel Component
const Carousel = () => {
    return (
        <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
                <div className="carousel-inner border-radius-lg h-100">
                    <CarouselItem 
                        isActive={true} 
                        imageUrl="../assets/img/carousel-1.jpg" 
                        captionTitle="Get started with Argon" 
                        captionText="There’s nothing I really wanted to do in life that I wasn’t able to get good at." 
                    />
                    {/* Repeat for other carousel items */}
                    {/* ... other CarouselItem components */}
                </div>
                <CarouselControls />
            </div>
        </div>
    );
};

// Carousel Item Component
const CarouselItem = ({ isActive, imageUrl, captionTitle, captionText }) => {
    return (
        <div className={`carousel-item h-100 ${isActive ? 'active' : ''}`} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}>
            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                    <i className="ni ni-camera-compact text-dark opacity-10"></i>
                </div>
                <h5 className="text-white mb-1">{captionTitle}</h5>
                <p>{captionText}</p>
            </div>
        </div>
    );
};

// Carousel Controls Component
const CarouselControls = () => {
    return (
        <>
            <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    );
};

// Sales by Country Component
const SalesByCountry = () => {
    return (
        <div className="card">
            <div className="card-header pb-0 p-3">
                <div className="d-flex justify-content-between">
                    <h6 className="mb-2">Sales by Country</h6>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table align-items-center">
                    <tbody>
                        <CountryRow 
                            country="United States" 
                            flagUrl="../assets/img/icons/flags/US.png" 
                            sales="5000" 
                        />
                        {/* Repeat for each country */}
                        {/* ... other CountryRow components */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Country Row Component
const CountryRow = ({ country, flagUrl, sales }) => {
    return (
        <tr>
            <td className="w-30">
                <div className="d-flex px-2 py-1 align-items-center">
                    <div>
                        <img src={flagUrl} alt={`${country} flag`} />
                    </div>
                    <div className="ms-4">
                        <p className="text-xs font-weight-bold mb-0">Country:</p>
                        <h6 className="text-sm mb-0">{country}</h6>
                    </div>
                </div>
            </td>
            <td>{sales}</td>
            {/* Other columns for sales and values */}
        </tr>
    );
};

// Categories List Component
const CategoriesList = () => {
    return (
        <div className="card">
            <div className="card-header pb-0 p-3">
                <h6 className="mb-0">Categories</h6>
            </div>
            <div className="card-body p-3">
                <ul className="list-group">
                    <CategoryItem 
                        title="Devices" 
                        stock="250 in stock" 
                        sold="346+ sold" 
                        icon="ni ni-mobile-button" 
                    />
                    {/* Repeat for each category */}
                    {/* ... other CategoryItem components */}
                </ul>
            </div>
        </div>
    );
};

// Category Item Component
const CategoryItem = ({ title, stock, sold, icon }) => {
    return (
        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div className="d-flex align-items-center">
                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                    <i className={`${icon} text-white opacity-10`}></i>
                </div>
                <div className="d-flex flex-column">
                    <h6 className="mb-1 text-dark text-sm">{title}</h6>
                    <span className="text-xs">{stock}, <span className="font-weight-bold">{sold}</span></span>
                </div>
            </div>
            <div className="d-flex">
                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                    <i className="ni ni-bold-right" aria-hidden="true"></i>
                </button>
            </div>
        </li>
    );
};

export default Dashboard;

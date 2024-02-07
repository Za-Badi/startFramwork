import { Link, useLocation } from "react-router-dom";

export default function Navbar()  {
    // const location = useLocation();

    function activeLink(link) {
        //remove active class
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`.${ link }`).classList.add('active');
        console.log(`${ link }`);
    
      }
    return (
      <nav 
        className="navbar navbar-expand-sm navbar-light mainColor py-3"
      >
        <div className="container-fluid d-flex justify-content-between align-items-lg-end py-2  px-5">
              <Link className="navbar-brand text-white active fw-bolder fs-3" onClick={function(){
            activeLink("home");
          }} to="/home">
            START FRAMEWORK{" "}
          </Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex justify-content-end w-100">
                    {/* <li class="nav-item">
                        <Link   className="  nav-link active  text-uppercase text-light" to="home" aria-current="page"
                            >Home
                            <span class="visually-hidden">(current)</span></Link>
                    </li> */}
                    <li  className="nav-item">
                        <Link className="nav-link text-uppercase about text-light fw-bold" aria-current="page"  onClick={function(){
                    activeLink("about");
                  }} to="/about"
                >about</Link>
                    </li>
                    <li className="nav-item">
                        <Link className=" nav-link text-uppercase portfolio fw-bold text-white" onClick={function(){
            activeLink("portfolio");
          }}  to="portfolio">portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-uppercase contact fw-bold text-white" onClick={function(){
            activeLink("contact");
          }} to="contact">contact</Link>
                    </li>
                    
                   
                </ul>
                
            </div>
        </div>
      </nav>
      
    )
  
}

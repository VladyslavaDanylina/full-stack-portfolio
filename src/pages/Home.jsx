import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="  w-full min-vh-100  text-white  d-flex justify-content-between justify-content-md-center font-sans">
      <div className="  custom-margin d-flex justify-content-between  w-full flex-column container">
        <div className=" custom-margin-container sm:flex-row d-flex justify-center align-items-center gap-4  justify-content-between">
          <div className="d-flex  align-items-center ">
            <h1 className="display-2  w-auto title text-sm-3xl tracking-tight m-0">FULL-STACK </h1>
          </div>
          <Link
  to="/projects"
  className="arrow-wrapper d-inline-flex align-items-center justify-content-center rounded-circle  p-2 text-white text-decoration-none transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-icon"
    fill="currentColor"
    viewBox="0 0 16 16"
    width="32"
    height="32"
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
      .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
      8.5H1.5A.5.5 0 0 1 1 8"
    />
  </svg>
</Link>
        </div>
        <div className="w-100 border-top border-light opacity-25"></div>
        <div className=" custom-margin my-sm-3 title-custom d-flex sm:flex-row align-items-center justify-content-md-center gap-3 ">
          <div className=" text-warning display-5 fst-normal rounded-full flex items-center justify-center text-sm font-bold text-[#0b0b2e]">✷</div>
            <div className="  display-5 fst-normal">
              <h2 className=" m-0 title display-2 text-5xl sm:text-3xl">DEVELOPMENT</h2>
            </div>
          </div>
          <div className="w-100 border-top  border-light opacity-25"></div>
          <div className=" custom-margin my-sm-3 d-flex flex-column flex-lg-row align-items-lg-center justify-content-center justify-content-between py-6 gap-6">
            <div>
              <h2 className="title display-2 sm:text-3xl"> PORTFOLIO</h2></div>
            <div className="max-w-lg min-w-sm text-sm text-white/80">
              <p className="title-light text-light mx-auto-lg px-lg-5" style={{ maxWidth: '500px' }}>
              Modern, adaptive, and built to last,<br />
                      clean code, smooth design,<br />
                      simplicity we trust.
              </p>
            </div>
            <div className="py-5  max-w-4xl w-auto">
              <Link to="/projects" className="d-flex flex-lg-row px-4 py-2 justify-content-center btn btn-outline-light btn-custom rounded-pill border border-white/40">
                View Projects
              </Link>
            </div>  
        </div>


        </div>
      </div>
  )
}

export default Home
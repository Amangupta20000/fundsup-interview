import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeImg from './images/home.svg';


function Home() {
    return (
        <div>
        <section id="header" className="d-flex ">
             <div className="container-fluid">
                     <div className="row">
                         <div className="col-10 mx-auto ">
                         <div className="row">
                             <div className=" col-lg-5 text-center pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column allignment">
                                 <h1 className='mt-5'><strong className="brand-name">Find connections that matter
                                  </strong></h1><br/>
                                 <h4 className="my-3">Fundsup helps early-stage startups, investors and tech ecosystems build trusted relationships and easily exchange knowledge</h4>
                                 <div className="mt-3">
                                     <NavLink to='/' className="Button">Get Started</NavLink>
                                 </div>
                             </div>
                             <div className='col-lg-7 order-1 order-lg-2 header-img'>
                                 <img src={HomeImg} className="img-fluid animated image" alt="home_image" />
                             </div>
                             </div>
                         </div>
                     </div>
             </div>
        </section>
 
         </div>
    )
}

export default Home;

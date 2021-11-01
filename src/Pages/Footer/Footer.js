import React from 'react';
// import imge from '../../images/icon/logo-wide.png'

const Footer = () => {
    return ( 
            <div className=" mt-5 w-100">
                <div className="jumbotron bg-warning text-black " >
                    <div className="row">
                        <div className="col-sm-4">
                            <br />
                            <h5 className="fw-bolder">The Tour Mania</h5>
                            {/* <img src={imge} alt="" /> */}
                            <p className="p-2">
                        Kamperen is equipped with everythig required for an amazing campground business website. Set up camp now.
                            </p>

                          <h4>Get Social</h4>
<div style={{fontSize:'20px',color:'red'}}>
    <i className="fab fa-facebook-square m-2" ></i>

                         <i className="fab fa-instagram m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-twitter-square m-2" style={{fontSize:'20px'}}></i>
                         <i className="fab fa-whatsapp m-2"  style={{fontSize:'20px'}}></i>
</div>
                        </div>
                        {/* <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Link</ol>
                                <ol >Home</ol>
                                <ol>About</ol>
                                <ol>Service</ol>
                               
                                <ol>Contact</ol>
                            </ul>
                        </div> */}
                        <div className="col-sm-8">
                          
                           <p>
                               <i className="fas fa-map-marked-alt bg-danger" ></i>
                               
                               <br />
                                730/C, PG- 11, Shahid Rauf Len<br />
                                 Keraniganj, Opposite of Pubali Bank,<br />
                                  Beside Vivo Showroom. Dhaka -1320, Bangladesh.</p>
                           <h5>Contuct us</h5>
                          <h4> <i className="fas fa-phone-volume"></i> 
                          +00-78-26-78-65
                         </h4>
                         <br />
                         
                        </div>
                    </div>  
                    <hr/>
                    <p>© Copyright The Tour Bees . All Rights Reserved </p>            
                </div> 
                
            </div>
       
    );
};

export default Footer;
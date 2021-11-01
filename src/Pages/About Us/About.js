import React from 'react';
import img1 from '../../images/about/bangladesh-tribal-1.jpg'
import img2 from '../../images/about/2.jpg'
const About = () => {
    return (
        <div className="" id="about">
            <div className="mt-5 ">
                <h2 className="mb-5 mt-5 text-danger">Our Mission and Vision</h2>
                <div className="row">
                    <div className="col-md-6">
                    <h4>Vision</h4>
                    <img src={img1} alt="" className="w-50" />
                <hr />
                <p>The Tour Mania is one of few travel companies in Bangladesh working on the field of sustainable tourism. We empower communities with tourism. The Tour Mania provides tour services in collaboration with the local community. You’ll get a chance to stay with the local community, experience new culture, lifestyle. With The Tour Mania, travelers will get a chance to experience Bangladesh in a new way.</p></div>
                    <div className="col-md-6">
                    <h4>Mission</h4>
                    <img src={img2} alt="" className="w-50" /> 
                    <hr />
                    <p>The Tour Mania Tourism Ltd. is established in 2015 with a vision to promote local travel experiences in Bangladesh. We work hand in hand with local people to promote ‘community-based tourism’ to provide travelers with an authentic and meaningful experience and to contribute to the preservation of culture and nature while bringing economic opportunities for sustainable livelihoods to local communities.</p>
                        
                    </div>
                </div>
                {/* <h2 className="text-center mt-5">Our Story
</h2>
               <div className="container">
               <h4>Vision</h4>
                <hr />
                <p>Avijatrik is one of few travel companies in Bangladesh working on the field of sustainable tourism. We empower communities with tourism. Avijatrik provides tour services in collaboration with the local community. You’ll get a chance to stay with the local community, experience new culture, lifestyle. With Avijatrik, travelers will get a chance to experience Bangladesh in a new way.</p>
                <h4>Mission</h4>
                <hr />
                <p>Yale New Haven Health is committed to innovation and excellence in patient care, teaching, research and service to our communities</p>
                <h4>Values</h4>
                <hr />
                <p>
                    <li>Integrity  Doing the right thing</li> 
                    <li>Patient-Centered Putting patients and families first</li> 
                    <li>Respect  Valuing all people</li> 
                    <li>Accountability  Being responsible and taking action</li> 
                    <li>Compassion  Being empathetic.</li>
                    </p> */}
               </div>
            </div>
        
    );
};

export default About;
import React, { useEffect, useState } from 'react';
// import './Services.css';
const MangeServices = () => {
const [services,setServices]=useState([])
useEffect(()=>{
fetch('https://damp-reaches-13129.herokuapp.com/services')
.then(res=>res.json())
.then(data=>setServices(data))
},[])

const handelDelete=id=>{
const url=`https://damp-reaches-13129.herokuapp.com/services/${id}`
fetch(url,{
method:'DELETE'

})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount){
const remaining= services.filter(service=>service._id !== id);
    setServices(remaining);
alert('Successfully deleted')

    }
    
})

}


    return (
        <div>
            {/* <h2>This Mange Service</h2> */}
<div className="service-container mt-5">
     {

services.map(service=><div key={service._id}>
<h1>{service.name}</h1>
<br /> <br />
<img className="w-25 "  src={service.img} alt="" />

<br /><br />

<p>{service.discription}</p>

<button className="btn-danger px-2 py-1" onClick={()=>handelDelete(service._id)}>Delete</button>
<br /><br /><br />
</div>)

            }
</div>
           
        </div>
    );
};

export default MangeServices;
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */


import React from "react";
import image1 from './assets/image4.jpg';
import './Card.css';
const Card = props =>{
    return (
        <div className='card text-center '>
          
            <div className="row">
                 <div className="col-md-5" >
                    <img src={image1} alt="Avatar" className='image  card-img-top'/>
                 </div>
                 <div className="name col-md-7">
                    <h4 className="card = title" align='center'>
                    Shraddha Gupta
                </h4>
               
                 </div>
            </div>

         
            
         
         <div className="card-body text-dark ">
             
             <p className="card-text text-secondery">
                 I'm a  python devloper having 3 years of experince in an IT Indusrty. 
             </p>
             <a href="#" className="btn btn-outline-info">View Profile</a>

             <a href="#" className="btn btn-outline-info">Set Meeting</a>

             <a href="#" className="btn btn-outline-info">Bot Interview</a>
         </div>

        </div>
    );
};
export default Card;
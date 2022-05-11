import React from "react";
import './contact.css';

function Form() {
  
    function handleSubmit() {
      alert(`We have received your request and will get in touch with you soon.\n\n`);
      return false;
    }

    return (
      <div className="reserve">
        <strong><p>Fill in your details to request a pickup.</p></strong>
        <br></br><br></br>
        <form onSubmit={handleSubmit}>
          
          <input className="res"
            type="text"
            placeholder="Enter your full name"
          />
          <input className="res"
            type="email"
            placeholder="Enter your email address"
          />
          <input className="res"
            type="tel"
            placeholder="Enter your phone number"
          />
         <input className="res"
            type="text"
            placeholder="What's your Local Government Area?"
          />
           <textarea className="res"
          placeholder="Enter your detailed address"
          rows="2"/>
          <div style={{paddingLeft: "20px"}}><h3>Select a Recyclables Category</h3>
          <div>

            <span className="taa"><input type="radio" name="type"/>{" "}
          <label htmlFor="type">PET bottles</label></span>

          <span className="taa"><input type="radio" name="type"/>{" "}
          <label htmlFor="type">Aluminium cans</label></span>

          <span className="taa"><input type="radio" name="type"/>{" "}
          <label htmlFor="type">Glass</label></span>
          
          
          <span className="taa"><input type="radio" name="type"/>{" "}
          <label htmlFor="type">Carton</label></span>

          <span className="taa"><input type="radio" name="type"/>{" "}
          <label htmlFor="type">Newspapers</label></span>

          <input type="radio" name="type"/>{" "}
          <label htmlFor="type">Nylon bags</label>
          <br></br>
</div>
          </div>
          <br></br>

          <input className="resa"
            type="number"
            placeholder="Waste Quantity(kg)"
          />

           <textarea className="res"
          placeholder="Comments"
          rows="3"/>
          
          <center>
          <button type="submit">Submit Request</button>
          </center>
        </form>
      </div>
    );
  }
  
  export default Form;
  



       

       
        
        
 

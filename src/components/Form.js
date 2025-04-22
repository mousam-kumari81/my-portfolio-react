
import React from 'react';

import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
        <form>
            <label className='sub'>Your Name</label>
            <input type="text"></input>
            <br/>
            <label  className='sub'>Email Address</label>
            <input type="email"></input>
            <br/>
            <label  className='sub'>Subject</label>
            <input type="text"></input>
            <br/>
            <label className='sub' >Message</label>
            <textarea rows="6" placeholder= "Type Your Message here"/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  );
};

export default Form;
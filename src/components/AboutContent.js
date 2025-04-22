import React from 'react'
import "./AboutContentStyles.css"
import { Link } from 'react-router-dom';
import React1 from "../assets/react4.jpg"
import React2 from "../assets/react3.jpg"

const AboutContent = () => {
  return (
    <div className="about">

       <div className='left'>
          <h1>Who Am I</h1>
          <p>Im a front-end developer.I responsive secure websites for myself.</p>
             <br></br>

             <div className='skillset'>
          <p className='skill'>KEY SKILLS: </p>
            <br></br>
         
          <p className='skills'> <div className='hed'>LANGUAGES:</div>  <div className='hed-to'>HTML, TAILWIND CSS, JAVASCRIPT </div></p> <br></br>
          <p className='skills'> <div className='hed'>FRAMEWORKS:</div>  <div className='hed-to'>REACTJS, REDUX, CONTEXT API, NEXT JS</div></p> <br></br>
          <p  className='skills'> <div className='hed'>DATABASE MANAGEMENT:</div> <div className='hed-to'>SQL, MYSQL WORKBENCH, QUERY OPTIMIZATION</div></p> <br></br>
          <p  className='skills'> <div className='hed'>DESIGN:</div> <div className='hed-to'>RESPONSIVE DESIGN</div></p> <br></br>
          <p  className='skills'> <div className='hed'>TESTING:</div> <div className='hed-to'>REACT TESTING LIBRARY</div></p> <br></br>
          </div>
        <br></br>
          <Link to="/contact">
            <button className='btn'>
                 CONTACT
            </button>
          </Link>
       </div>



       <div className='right'>
            <div className='img-container'>
                <div className='img-stack-top'>
                    <img src={React1} className='img' alt='true'/>
                </div>

                <div className='img-stack-bottom'>
                    <img src={React2} className='img' alt='true'/>
                </div>

            </div>
       </div>

    </div>
  );
};

export default AboutContent
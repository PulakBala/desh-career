
import React from 'react';
import { Envelope } from 'react-bootstrap-icons';
import './Home.css'

const Home = () => {
    return (
        <div className='home p-5'>
            <h2 className='Home-hedline'>Get Smarter about your <br></br> career</h2>
            <p>Get the <span className='fs-4' style={{fontWeight:'500'}}>5-minute newsletter</span> keeping about smart career</p>
            <div className='input-area'>
                <Envelope className='email-icon'/>
                <input placeholder='Your E-mail address' style={{border:'none', outline:'none'}}></input>
                <button className='nav-link fs-3' style={{border:"none",backgroundColor:'red', borderRadius:'10px'}}>Join Free</button>
            </div>
            <p className='mt-3 home-p'>We're committed to your privacy. DashCareer uses the information you provide to contact you about our relevant content and services. You may unsubscribe from these communications at any time. For more information, check out our Privacy Policy.</p>
        </div>
    );
};

export default Home;
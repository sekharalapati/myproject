import React from 'react'
import { maindiv } from '../style.js'
import img1 from '../Assets/img1.jpg'
import { primaryColor } from '../style.js'
import Fitch from '../Components/Fitch.js';
export default function RCA() {
    return (
        <div className='main-dive-rca'>
          <h2>RCA</h2>
            <div className='RCA'>
                
                <div className='RCA-Content'>
                    <h1 style={primaryColor}>TRANSFORMING READING SKILLS<br/>
                    WITH PERSONALIZED LEARNING</h1>
                    <h2>Motivate Students | Empower Teachers | Achieve Measurable Result</h2>
                    <p><b>Human-centric AI-powered and Local Language Expertise:</b> Utilize cutting-edge AI to
                        personalize learning experiences and break down language barriers with support from local
                        language models (LLM).
                    </p>
                </div>
                <div className='RCA-img1'>
                    <img src={img1} alt=''></img>
                </div>
            </div>
            <Fitch/>
        </div>
      )
}

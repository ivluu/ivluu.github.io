import React from 'react'
import pfp from "./Images/IvanLuuUCSD.png"
import './Home.css';

export default function Home() {
    return (
        <div>
            <section class="container">
                <img id='portrait' src={pfp} alt="portrait"></img> 
                <p>
                    <br></br>
                    <b>Name: </b>Ivan Luu<br></br><br></br>
                    <b>Location: </b>Los Angeles, CA<br></br><br></br>
                    <b>Languages: </b>HTML, CSS, JavaScript, Java, C, C++<br></br><br></br>
                    <b>Email: </b>ivluu@ucsd.edu<br></br><br></br>
                    “If everything seems under control, you're just not going fast enough.”<br></br>
                    - Mario Andretti<br></br><br></br>
                    <a href='./Files/IvanLuuSoftwareEngineer.pdf'style={{color:'pink'}} download>Download My Resume</a>
                </p>
            </section>

            <section style={{textAlign:'center', marginTop:'50px',}}>
                <section style={{display:'inline-block', textAlign:'left'}}>
                    <p id="description">
                        Hello, and welcome to my portfolio. I am a former graphic designer and an aspiring software engineer obsessed
                        with UI/UX and finding balance between usability, functionality, and aesthetic. This website is a result of
                        my journey in applying some of the skills I have learned as a Computer Science student at UC San Diego and
                        familiarizing myself with ReactJS. I am constantly seeking opportunities to learn and contribute
                        to our ever-changing world of technology. Feel free to reach out to me for professional and business
                        inquiries. I hope you enjoy your stay.
                    </p>
                </section>
            </section>
        </div>
    )
}

import React from 'react'
import './Work.css'
import Portfolio from './Images/Portfolio.png'
import Pomodoro from './Images/pomoTimer.png'
import Onward from './Images/onwardProto.png'
import Linkedin from './Images/linkedInProto.png'

export default function Work() {
    return (
        <div>
            <section class="container2">
                <section style={{display:'inline-block', textAlign:'left'}}>
                    <section class="constrict">
                        <h2>Logo Design</h2>
                        <p>Logos created for clients, organizations, and projects.</p>
                        <section class="constrict2">
                            <img src={Portfolio} id='log' alt='Logos'></img>
                        </section>
                    </section>

                    <section class="constrict">
                        <h2>Pomodoro Timer</h2>
                        <p>Web application based on the Pomodoro technique. Created as a team using agile methodologies along with HTML, CSS, and Javascript.</p>
                        <a href='https://ivluu.github.io/PomodoroTimer' target='_blank' rel="noreferrer" style={{color:'deeppink'}}>visit</a><br></br>
                        <section class="constrict2">
                            <img src={Pomodoro} id='pom' alt='PomoTimer' style={{minWidth:'300px', objectFit:'contain'}}></img>
                        </section>
                        
                    </section>

                    <section class="constrict">
                        <h2 style={{marginTop:'80px'}}>Onward Prototype</h2>
                        <p>Team-based project to build a prototype of a group decision application. Created with an emphasis on usability and through the use of Figma</p>
                        <a href='https://www.figma.com/proto/GMancXVfI412dyvdjnsUux/Onward-App?node-id=15%3A920&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=15%3A920' target='_blank' rel="noreferrer" style={{color:'deeppink'}}>visit</a><br></br>
                        <section class="constrict2">
                            <img src={Onward} id='onw' alt='Onward' style={{minWidth:'250px', marginTop:'20px', objectFit:'contain'}}></img>
                        </section>
                    </section>

                    <section class="constrict">
                        <h2 style={{marginTop:'80px'}}>Linkedin Redesign Prototype</h2>
                        <p>Redesign of the Linkedin mobile app created by me for a team project. The redesign focuses on reducing the amount of actions and layers required by a user to perform tasks.</p>
                        <a href='https://www.figma.com/proto/XxpQdQ0Qh1ohiIVXWcLNQIP3/LinkedIn-Redesign?scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&node-id=1%3A3' target='_blank' rel="noreferrer" style={{color:'deeppink'}}>visit</a><br></br>
                        <section class="constrict2">
                            <img src={Linkedin} id='linkedin' alt='Linkedin' style={{width:'30vw', minWidth:'300px', marginTop:'20px'}}></img>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}
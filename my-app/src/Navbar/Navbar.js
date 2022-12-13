import React from 'react'
import Cypher from './Cypher/Cypher'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <Cypher />
            <ul className='list'>
                <li>
                    <NavLink exact={true} activeClassName="active" to="/" className="main-nav">Home</NavLink>
                </li>
                <li className="sep"> </li>
                <li>
                    <NavLink exact={true} activeClassName="active" to="/work" className="main-nav">Work</NavLink>
                </li>
                <li className="sep"> </li>
                <li>
                    <NavLink exact={true} activeClassName="active" to="/play" className="main-nav">Play</NavLink>
                </li>
                <li className="sep"> </li>
                <li>
                    <NavLink exact={true} activeClassName="active" to="/mood" className="main-nav">Mood</NavLink>
                </li>
            </ul>
        </nav>
    )
}
import React from 'react'
import { Link } from "react-router-dom";
import './Cypher.css'

export default function Cypher() {
    return (
        <div class="logo">
            <Link exact to="/" id="myName" onMouseOver={cypherIn} onMouseLeave={cypherOut}>ilvvsion</Link>
            <h5 id="roman">↑ hover over me ↑</h5>
        </div>
    )
}

let ctr = 0;
let hovered = false;

function cypherIn() {

    if (hovered === false) {
        document.getElementById("roman").innerHTML = "&zwnj;";
    }

    for (let i = 0; i <= 20; i++) {
            if (i === 20) {
                setTimeout(() => {document.getElementById("myName").innerHTML = "Ivan Luu";}, i * 50);
                ctr++;
            } else {
                setTimeout(() => {document.getElementById("myName").innerHTML = randStr(8);}, i * 50);
            }
        
    }
}

function cypherOut() {

    if (hovered === false) {
        document.getElementById("roman").innerHTML = "/iˈlo͞oZHən/";
        hovered = true;
    }

    if (ctr > 0) {
        for (let i = 0; i <= 20; i++) {
            setTimeout( function() {
                if (i === 20) {
                    document.getElementById("myName").innerHTML = "ilvvsion";
                } else {
                    document.getElementById("myName").innerHTML = randStr(8);
                }
            }, i * 50);
        }
    }
}

function randStr(length) {
    let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
   return result;
}
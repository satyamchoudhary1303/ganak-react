import logo from '../images/calculator-icon-logo-free-vector-removebg-preview.png';
import React from 'react';
import { ReactPropTypes } from 'react';

export default function Navbar(props) {
  return (
    <div className={`w3-third w3-card-2 w3-border-right}`}>
        <div className="w3-display-container">
            <img src={logo} style={{width: 40 + 'px'}} alt="Avatar" className="w3-margin"/>
            <h3 className="w3-text-grey">Ganak</h3>
        </div>
        <div className="w3-container">
            <p>
                <i className="fa fa-home fa-fw w3-large w3-text-cyan" onClick={props.sttb}></i>
                <button className="w3-text-grey" onClick={props.sttb}>Your Ganak</button>
                <ul>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                </ul>
            </p>
            <p>
                <i className="fa fa-language fa-fw w3-large w3-text-cyan" onClick={props.stvk}></i>
                <button className="w3-text-grey" onClick={props.stvk}>Virtual Keyboard</button>
                <ul>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                </ul>
            </p>
            <p>
                <i className="fa fa-keyboard-o fa-fw w3-large w3-text-cyan" onClick={props.stks}></i>
                <button className="w3-text-grey" onClick={props.stks}>Keyboard Shortcuts</button>
                <ul>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                </ul>
            </p>
            <p>
                <i className="fa fa-code fa-fw w3-large w3-text-cyan" onClick={props.stlc}></i>
                <button className="w3-text-grey" onClick={props.stlc}>LaTeX Command</button>
                <ul>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                    <li><button className="w3-text-grey">Lorem ipsum dolor sit amet.</button></li>
                </ul>
            </p>
        </div>
        <br/>
    </div>
  )
}

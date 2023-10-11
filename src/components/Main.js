import React from 'react'
import Mathfield from './Mathfield'

export default function Main(props){
    return (
        <div className="w3-twothird">
            <div className={`mode-container w3-card-2 w3-white`}></div>

            <div className={`w3-container w3-card-2 w3-white`} ref={props.tb}>
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-calculator fa-fw w3-margin-right w3-xxlarge w3-text-cyan"></i>Toolbox</h2>
                <Mathfield/>
            </div>

            <div className={`w3-container w3-card-2 w3-white`} ref={props.vk}>
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-language fa-fw w3-margin-right w3-xxlarge w3-text-cyan"></i>Virtual Keyboard</h2>
            </div>

            <div className={`w3-container w3-card-2 w3-white`} ref={props.ks}>
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-keyboard-o fa-fw w3-margin-right w3-xxlarge w3-text-cyan"></i>Keyboard Shortcuts</h2>
            </div>

            <div className={`w3-container w3-card-2 w3-white`} ref={props.lc}>
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-code fa-fw w3-margin-right w3-xxlarge w3-text-cyan"></i>LaTeX Command</h2>
            </div>
        </div>
    )
}

import './App.css';
import React,{useRef, useState} from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
    const tb = useRef(null);
    const sttb = () => {
        const tbElement = tb.current;
        const topOffset = tbElement.offsetTop - 50;
        window.scrollTo({
          top: topOffset,
        });   
    };
    const vk = useRef(null);
    const stvk = () => {
        const vkElement = vk.current;
        const topOffset = vkElement.offsetTop - 50;
        window.scrollTo({
          top: topOffset,
        });      
    };
    const ks = useRef(null);
    const stks = () => {
        const ksElement = ks.current;
        const topOffset = ksElement.offsetTop - 50;
        window.scrollTo({
          top: topOffset,
        });   
    };
    const lc = useRef(null);
    const stlc = () => {
        const lcElement = lc.current;
        const topOffset = lcElement.offsetTop - 50;
        window.scrollTo({
          top: topOffset,
        });   
    };

    return (
        <>
            <Navbar sttb={sttb} stvk={stvk} stlc={stlc} stks={stks}></Navbar>
            <Main tb={tb} vk={vk} lc={lc} ks={ks}></Main>
        </>
    );      
}
export default App;
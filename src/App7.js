import React from 'react'
import './App7.css'
import {ReactComponent as R1} from "./assets/Ellipse 223.svg"
import {ReactComponent as R2} from "./assets/Group 35626.svg"
import {ReactComponent as R3} from "./assets/Path 46.svg"
import Ellipse from "./assets/Ellipse 216.png"
function App7() {
    return (
        <>
            <div id="i1">
            <div id="i2">
                <R1></R1>
                </div>
                <div id="i3">
                    <img src={Ellipse}></img>
                </div>
            </div>
            <div id="i4"><R2></R2></div>
            <div id="i5">SELECTED CUSTOMERS</div>
            <div id="i6">Check what our client say about us</div>
            <div id="i7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.</div>
            <div id="i8"><R3></R3></div>
        </>
    )
}

export default App7

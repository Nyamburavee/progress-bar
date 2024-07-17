import React from "react"
import './App.css';
import Progressbar from "./Progressbar"
import {useState} from "react"


export default function App() {
    const [val, setVal] = useState(10)
    function setValuer(e){
        setVal(Number(e.target.value))
    }
    return (
       <div>
        <div className="app-container">
            <h1 className=" title">My Progress Bar</h1>
            <Progressbar width={val} />
            <form>
                <label htmlFor="html">Input Percentage: </label>
                <input type="number" onChange={setValuer}/>
            </form>
            
        </div>
        </div>
    )
};


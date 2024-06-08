import React, { useState } from 'react'
import './work.scss'
import { workData } from '../data/data'

export default function Work() {
    const [currSlider, setCurrSlider] = useState(0);
    const handleSldier = (way) => {
        way === 'left' ? 
            setCurrSlider(currSlider > 0 ? currSlider - 1 : 2) : 
            setCurrSlider(currSlider < workData.length - 1 ? currSlider + 1 : 0) 
    };

    return (
        <div className='work' id='work'>
            <div className='slider' style={{transform: `translateX(-${currSlider *100}vw)`}}>
                {workData.map(item => (
                    <div className='container'>
                        <div className='item'>
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h2>{item.hValue}</h2>
                                    <p>{item.pValue}</p>
                                    <span>{item.spanValue}</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="imgContainer">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="images/left-arrow.png" className='arrow left' alt="" onClick={()=> handleSldier('left')} />
            <img src="images/left-arrow.png" className='arrow right' alt="" onClick={()=> handleSldier()} />
        </div>
    )
}

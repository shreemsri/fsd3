import React from 'react'
import { useState } from 'react'

function ImageMnipulation() {
    const [height, setHeight] =useState(400);
    const [width, setWidth] =useState(400);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(80);
    const [blue, setBlue] = useState(96);

    function increaseHeight(){
        setHeight(height+10);
    }
    function decreaseHeight(){
        setHeight(height-10);
    }
    function increaseWidth(){
        setWidth(width+10);
    }
    function decreaseWidth(){
        setWidth(width-10);
    }

    function changebackgroundColor(){
        setRed(Math.floor(Math.random()*256));
        setGreen(Math.floor(Math.random()*256));
        setBlue(Math.floor(Math.random()*256));
    }

  return (
    <div>
      <h2 style={{color:"blue", textAlign:"center"}}>ImageManipulation</h2>
      <div style={{height:"400px", width:"400px", border:"1px solid black", margin:"0 auto", backgroundColor:`rgb(${red},${green},${blue})`}}>
        <center><img src="https://imgs.search.brave.com/6YM97xURIxR9L88USL6Yqd5eXlbxZS86Ybvq2GUgt1Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzAyLzYyLzgx/LzM2MF9GXzEwMjYy/ODE1NV9aUGlBYU5F/RFJTWlUyUzBMQWti/Y2d2d0x5TW1yOWMy/WS5qcGc" height={height} width={width} alt="image" style={{}}/></center>
      </div>
      <div>
        <button onClick={increaseHeight}>increaseHEIGHT</button>
        <button onClick={decreaseHeight}>decreaseHEIGHT</button>
        <button onClick={increaseWidth}>increaseWIDTH</button>
        <button onClick={decreaseWidth}>decreaseWIDTH</button>
        <button onClick={changebackgroundColor}>Change Background Color</button>
      </div>
    </div>
  )
}

export default ImageMnipulation

import React from 'react'

function ColorChange() {
    const[color, setRed] = React.useState('red');
    const[color, setBlue] = React.useState('blue');
    function RedColor(){
        setRed('red');
    }
    function BlueColor(){
        setBlue('blue');
    }
    return (
        <div>
            <div style="backgrond-color: rgb(${red}, ${blue}, 0)"></div>
            <div>
                <botton onclick={RedColor}>RED</botton>
                <botton onclick={BlueColor}>BLUE</botton>
            </div>
        </div>
    )
}

export default ColorChange

import { useState } from "react";

function Choices({choice}) {
    const [health, setHealth] = useState(props.choice.health)
    
    return (
       <>
            <h2>Name: {choice.name}</h2>
            <h3>Health: {choice.health}</h3>
            <h3>Power: {choice.power}</h3>
            <h3>Accuracy: {choice.accuracy}</h3>
            <hr></hr>
       </>
    )
}

export default Choices;
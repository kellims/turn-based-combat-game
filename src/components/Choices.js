import { useState } from "react";

function Choices({choice}) {
    const [health, setHealth] = useState(choice.health)
    function increaseHealth() {
        setHealth(health + 5);
    }
    return (
       <>
            <h2>Name: {choice.name}</h2>
            <div className="health">
            <h3>Health: {health}</h3><button onClick={increaseHealth}>+</button>
            </div>
            <h3>Power: {choice.power}</h3>
            <h3>Accuracy: {choice.accuracy}</h3>
            <hr></hr>
       </>
    )
}

export default Choices;
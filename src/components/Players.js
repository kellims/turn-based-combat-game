import Choices from "./Choices";

function Players() {
    const potentialPlayers = [
        {
            name: "Spell Master",
            health: 90,
            power: 15,
            accuracy: 60
        }, {
            name: "Jalapeno on a stick",
            health: 70,
            power: 25,
            accuracy: 90
        }, {
            name: "Corn dogs",
            health: 80,
            power: 20,
            accuracy: 80
        }, {
            name: "Evil Algebra Man",
            health: 40,
            power: 35,
            accuracy: 95
        }
    ]
    return (
        <>
            <h2> This are my players!</h2>
            
            {potentialPlayers.map((thisIsThePlayerAtTheIndex, idx) => {
                return <div key={idx}><Choices choice={thisIsThePlayerAtTheIndex} /> </div>
            })}
        </>
        
    )
}

export default Players;
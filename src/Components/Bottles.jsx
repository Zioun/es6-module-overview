import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import './Bottle/Bottle.css'
import { addToLs } from "../Utilites/localstore";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(()=>{
        fetch("watch.json")
        .then(res => res.json())
        .then(data => setBottles(data));
    },[])
    
    const handleCard = (bottle) =>{
        const newCard = [...card, bottle];
        setCard(newCard);
        addToLs(bottle.id)
    }
    return (
        <div>
            <h1>Watch Shop</h1>
            <h3>Bottle Available : {bottles.length}</h3>
            <h3>Add To Card : {card.length}</h3>
            <div className="cardArea">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCard={handleCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;
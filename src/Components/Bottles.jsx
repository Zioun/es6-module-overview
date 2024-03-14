import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle/Bottle";
import './Bottle/Bottle.css'
import { addToLs, getStoredCard, removeFromLS } from "../Utilites/localstore";
import Cart from "./Bottle/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(()=>{
        fetch("watch.json")
        .then(res => res.json())
        .then(data => setBottles(data));
    },[])

    // load cart from local storage
    useEffect(()=>{
        console.log("call the useEffect", bottles.length)
        if(bottles.length){
            const storedCart = getStoredCard();
            console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('saved cart', savedCart);
            setCard(savedCart);
        }
    },[bottles])
    
    const handleCard = (bottle) =>{
        const newCard = [...card, bottle];
        setCard(newCard);
        addToLs(bottle.id);
    }
    const handleRemoveFromCart = id => {
        const remainingCart = card.filter(bottle => bottle.id !== id);
        setCard(remainingCart);
        removeFromLS(id);
    }
    return (
        <div>
            <h1>Watch Shop</h1>
            <h3>Bottle Available : {bottles.length}</h3>
            <h3>Add To Card : {card.length}</h3>
            <div className="cardArea">
                {
                    card.map(card => <Cart handleRemoveFromCart={handleRemoveFromCart} key={card.id} bottle={card} handleCard={handleCard}></Cart>)
                }
            </div>
            <div className="cardArea">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCard={handleCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;
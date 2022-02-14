import React, { useState } from 'react'
import { Data } from '../Data';
import Quote from "./Quote";


export const Control = () => {
    const getRandomIndex = (max) =>
        Math.round(Math.random() * ((Data.length - 1) - 0) + 0);

    const [quote, setQuote] = useState(Data[getRandomIndex()])

    const handleNewQuote = () => {
        setQuote(Data[getRandomIndex()])
    }

    return (
        <div className="main">
            <Quote handleNewQuote={handleNewQuote} quote={quote} />
        </div>
    )
}
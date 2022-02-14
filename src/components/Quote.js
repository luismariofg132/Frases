import React from 'react'

const Quote = ({ quote, handleNewQuote }) => {
    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <h2 id="author">{quote.author}</h2>
            <div className="actions">
                <button id="new-quote" className="button" onClick={handleNewQuote} >
                    New Quote
                </button>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet" id="tweet-quote" >
                    Tweet
                </a>
            </div>
        </div>
    )
}

export default Quote
import React from 'react';


// this is not HTML is JSX
const Card = ({ name, email, id }) => {
    // We need to return just one thing so everything needs to be in for example one div element, I can't put titles outside
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    )
}

export default Card;
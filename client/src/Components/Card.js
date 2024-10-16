import React from 'react'

function Card() {
    return (
        <div className="card bg-base-50 w-96 shadow-xl m-3">
            <figure>
                <img
                    src="https://picsum.photos/900/700/"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card


// integrate Pexels api 
// XYuDnLuYXkiHD3SOEJN6UNK4whVqfyIKkcZDAYFudPt6wJjtRuKbKIdq
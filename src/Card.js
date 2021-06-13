import React from 'react';
import foto1 from 'foto1.jpg';

const Card = (props) => {
    return (

        <div>           
                <img src={foto1.jpg} />
                <button>Click On</button>
                <p>{props.mytext}</p>
        </div>

     )
};

export default Card;
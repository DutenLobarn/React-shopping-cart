import React from 'react';


function Produkts(props){
    return(
        <div className="bokWrapper">
            <h4 className="bokWrapper-h4">{props.boktitel}</h4>
            <p className="bokWrapper-p1">Av Sir Arthur Conan Doyle</p>
            <p className="bokWrapper-p2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quo sed quibusdam minima voluptatum soluta provident voluptatibus, incidunt distinctio, autem modi. Dicta non pariatur at soluta doloremque tempore quia doloribus.</p>
            <button className="btn">Add to cart</button>
        </div>
    )
}


export default Produkts;
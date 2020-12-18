import React from 'react'

import Header from './Header'
import Produkts from './Produkts'

function App(){
    return(
        <div>
            <Header />
            <div className="produkt-wrapper">

            <Produkts boktitel= 'A Sign of Four' />
            <Produkts boktitel= 'A Study in Scarlet' />
            <Produkts boktitel= 'Baskervilles Hound' />
            <Produkts boktitel= 'The Adventures of Sherlock Holmes' />
            </div>
        </div>

    )
}

export default App;
import { useState } from 'react';
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import { ContextCountProducts } from './utils/context-count'

function App() {

    const [countProducts, setCountProducts] = useState<number>(0);

    return (
        <ContextCountProducts.Provider value={{ countProducts, setCountProducts }}>
            <Header />
            <ListingBody />
        </ContextCountProducts.Provider>
    )
}

export default App

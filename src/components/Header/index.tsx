import { useContext } from 'react';
import { ContextCountProducts } from '../../utils/context-count';
import './style.css'

function Header() {

    const { countProducts } = useContext(ContextCountProducts);

    return (
        <header className='header-container'>
            <nav className="container nav-container">
                <h1>DsFilter</h1>
                <p>{countProducts} produtos</p>
            </nav>
        </header>
    )
}

export default Header
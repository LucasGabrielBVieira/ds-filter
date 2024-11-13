import { ProductDTO } from '../../models/product-dto'
import './style.css'

type Props = {
    listProducts: ProductDTO[]
}

function Listing({ listProducts }: Props) {

    return (
        <section className='listing-container pd20'>
            { listProducts &&
                listProducts.map(product => (
                    <div key={product.id} className='cart-product'>
                        <h2>{product.name}</h2>
                        <p>R$ {product.price}</p>
                    </div>
                ))
            }
        </section>
    )

}

export default Listing
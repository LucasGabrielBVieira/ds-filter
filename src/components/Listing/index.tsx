import { ProductDTO } from '../../models/product-dto'
import './style.css'

type Props = {
    listProducts: ProductDTO[]
}

function Listing({ listProducts }: Props) {

    return (
        <section className='listing-container pd20'>
            { listProducts.length > 0 ?
                listProducts.map(product => (
                    <div key={product.id} className='cart-product'>
                        <h2>{product.name}</h2>
                        <p>R$ {product.price}</p>
                    </div>
                )) :
                <p className='not-found-p'>Nenhum produto encontrado</p>
            }
        </section>
    )

}

export default Listing
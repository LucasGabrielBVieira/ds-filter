import { useEffect, useState } from "react"
import Filter from "../Filter"
import Listing from "../Listing"
import { ProductDTO } from "../../models/product-dto"
import * as productService from "../../service/product-service"

function ListingBody() {

    const [listProducts, setListProducts] = useState<ProductDTO[]>([])

    useEffect(() => {
        const listProducts: ProductDTO[] = productService.findByPrice(0, Number.MAX_SAFE_INTEGER);
        setListProducts(listProducts);
    }, [])

    return (
        <main>
            <div className="container mt20">
                <Filter />
            </div>
            <div className="container mt20">
                <Listing listProducts={listProducts} />
            </div>
        </main>
    )

}

export default ListingBody
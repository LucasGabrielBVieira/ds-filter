import { useContext, useEffect, useState } from "react"
import Filter from "../Filter"
import Listing from "../Listing"
import { ProductDTO } from "../../models/product-dto"
import * as productService from "../../service/product-service"
import { ContextCountProducts } from "../../utils/context-count"

function ListingBody() {

    const { setCountProducts } = useContext(ContextCountProducts);

    const [ listProducts, setListProducts ] = useState<ProductDTO[]>([])

    useEffect(() => {
        const listProducts: ProductDTO[] = productService.findByPrice(0, Number.MAX_SAFE_INTEGER);
        setListProducts(listProducts);
        setCountProducts(listProducts.length)
    }, [])

    function handleFilter(min: number, max: number) {
        const listProducts: ProductDTO[] = productService.findByPrice(min, max);
        setCountProducts(listProducts.length);
        setListProducts(listProducts);
    }

    return (
        <main>
            <div className="container mt20">
                <Filter onFilter={handleFilter} />
            </div>
            <div className="container mt20">
                <Listing listProducts={listProducts} />
            </div>
        </main>
    )

}

export default ListingBody
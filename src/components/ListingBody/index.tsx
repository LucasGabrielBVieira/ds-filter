import Filter from "../Filter"
import Listing from "../Listing"

function ListingBody() {

    return (
        <main>
            <div className="container mt20">
                <Filter />
            </div>
            <div className="container mt20">
                <Listing />
            </div>
        </main>
    )

}

export default ListingBody
import './style.css'

function Filter() {

    return (
        <div className="filter-container pd20">
            <input className='filter-container-items' type="number" placeholder="Preço mínimo" />
            <input className='filter-container-items' type="number" placeholder="Preço máximo" />
            <button className='filter-container-items' type='submit'>Filtrar</button>
        </div>
    );

}

export default Filter;
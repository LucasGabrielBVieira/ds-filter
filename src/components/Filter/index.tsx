import { useState } from 'react';
import './style.css'

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onFilter: Function
}

type Form = {
    min?: number;
    max?: number;
}

function Filter({ onFilter }: Props) {

    const [form, setForm] = useState<Form>({});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setForm({ ...form, [name]: value });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(form.min || 0, form.max || Number.MAX_VALUE);
    }

    return (
        <form onSubmit={handleSubmit} className="filter-container pd20">
            <input
                onChange={handleChange}
                name='min'
                value={form.min || ''}
                className='filter-container-items'   
                type="number" placeholder="Preço mínimo" />
            <input
                onChange={handleChange}
                name='max'
                value={form.max || ''}
                className='filter-container-items'
                type="number" placeholder="Preço máximo" />
            <button className='filter-container-items' type='submit'>Filtrar</button>
        </form>
    );

}

export default Filter;
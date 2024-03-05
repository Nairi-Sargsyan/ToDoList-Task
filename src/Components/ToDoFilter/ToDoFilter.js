import { useDispatch } from 'react-redux';
import { setFilter } from '../Store/StoreSlice';

import './ToDoFilter.scss';

const ToDoFilter = () => {
    const dispatch = useDispatch();

    const handleFilter = (filter) => {
        dispatch(setFilter(filter));
    };

    return (
        <section className="task__filter text-md-start text-center">
            <button
                onClick={() => handleFilter('All')}
                className="filter__item me-2"
            >All</button>
            <button
                onClick={() => handleFilter('Completed')}
                className="filter__item me-2"
            >Completed</button>
            <button
                onClick={() => handleFilter('Current')}
                className="filter__item"
            >Current</button>
        </section>
    );
}

export default ToDoFilter;
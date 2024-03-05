import { useDispatch } from 'react-redux';
import { updateToDoStatus } from '../Store/StoreSlice';

import './ToDoItem.scss';

const ToDoItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleCompletedToDoItem = () => {
        dispatch(updateToDoStatus({ id, newStatus: true }));
    }

    const { todoText, id, status } = item;

    return (
        <div
            onClick={handleCompletedToDoItem}
            className="to-do-item mb-2 d-flex justify-content-between align-items-center"
        >
            <p className="item__number mb-0">{id}</p>
            <h4 className="item__name mb-0">{todoText}</h4>
            <p className="item__status mb-0">{status ? 'Completed' : 'Current'}</p>
        </div>
    );
}

export default ToDoItem;
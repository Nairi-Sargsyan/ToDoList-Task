import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useSelector } from 'react-redux';
import { selectToDoByFilter } from '../Store/SelectorFilter';

const ToDoList = () => {
    const itemToDo = useSelector(selectToDoByFilter);

    return (
        <div className="app__body">
            <div className="container">
                <section className="body__list mt-3">
                    {itemToDo.length > 0 ? (
                        itemToDo.map((item, index) => (
                            <ToDoItem key={index} item={item} />
                        ))
                    ) : (
                        <h3>There are no tasks!</h3>
                    )}
                </section>
            </div>
        </div>
    );
}

export default ToDoList;
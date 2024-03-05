import React from "react";
import { useState, useRef } from "react";


import { useDispatch } from "react-redux";
import { addToDo } from '../Store/StoreSlice';

import './ToDoForm.scss';

const ToDoForm = () => {

    const [toDoText, setToDoText] = useState(''),
        [toDoId, setToDoId] = useState(1);
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleAddToDo = () => {
        if (inputRef.current.value.trim() === '') {
            inputRef.current.style.border = '1px solid red';
            return;
        } else {
            inputRef.current.style.border = '';
        }

        const newToDo = {
            todoText: toDoText,
            id: toDoId,
            status: false
        }

        dispatch(addToDo(newToDo));
        setToDoId(prev => prev + 1);
        setToDoText('');
    }

    const handleEnterKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleAddToDo();
        }
    }

    return (
        <section className="task__form w-100 me-4">
            <label className="form__title mb-2" htmlFor="task__input">Add a new task</label>
            <div className="form__control d-flex">
                <input
                    onChange={e => setToDoText(e.target.value)}
                    onKeyDown={handleEnterKeyboard}
                    ref={inputRef}
                    value={toDoText}
                    className="form__input w-100"
                    type="text"
                    name="task__input"
                    plaseholder="Task..."
                />
                <button className="btn__add" onClick={handleAddToDo}>+</button>
            </div>
        </section>
    );
}

export default ToDoForm;
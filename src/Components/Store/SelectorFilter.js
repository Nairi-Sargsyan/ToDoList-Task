import { createSelector } from "@reduxjs/toolkit";

export const selectAllToDos = state => state.store.todos;
export const selectFilter = state => state.store.filter;

export const selectToDoByFilter = createSelector(
    [selectAllToDos, selectFilter],
    (allToDos, filter) => {
        if (filter === 'all') {
            return allToDos;
        } else if (filter === 'Current') {
            return allToDos.filter(todo => todo.status === false);
        } else if (filter === 'Completed') {
            return allToDos.filter(todo => todo.status === true);
        }
        return allToDos;
    }
);
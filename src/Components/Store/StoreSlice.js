import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    filter: 'All'
};

const StoreSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo(state, action) {
            const { todoText, id, status } = action.payload;

            const newToDo = {
                todoText,
                id,
                status
            };

            state.todos = [newToDo, ...state.todos];
        },
        setFilter(state, action) {
            state.filter = action.payload;
        },
        updateToDoStatus(state, action) {
            const { id, newStatus } = action.payload;
            state.todos = state.todos.map(todo =>
                todo.id === id ? { ...todo, status: newStatus } : todo
            );
        }
    }
});

export const { addToDo, setFilter, updateToDoStatus } = StoreSlice.actions;
export default StoreSlice.reducer;
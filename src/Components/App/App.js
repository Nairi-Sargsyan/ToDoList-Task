import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoFilter from '../ToDoFilter/ToDoFilter';
import ToDoList from '../ToDoList/ToDoList';

import { useRef } from 'react';

import { Provider } from 'react-redux';
import Store from '../Store/Store';

import './App.scss';

function App() {

  const filterButtonRef = useRef();

  const handleOpenFilterPanel = () => {
    const filterPanel = document.querySelector('.task__filter');
    filterPanel.classList.toggle('filter__active');
    filterButtonRef.current.classList.toggle('active');
  }

  return (
    <Provider store={Store}>
      <div className="App">
        <div className="app__header">
          <div className="container">
            <div className="header d-flex justify-content-between align-items-end">
              <ToDoForm />
              <button
                onClick={handleOpenFilterPanel}
                ref={filterButtonRef}
                className="filter__btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                </svg>
              </button>
            </div>
            <ToDoFilter />
          </div>
        </div>
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;

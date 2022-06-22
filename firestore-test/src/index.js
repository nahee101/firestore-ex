import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 웹 시작할 때 db 초기화하려고 import 하는 거임
import './database/firebase';
// 리덕스와 리덕스 미들웨어 추가
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

// Thunk
import ReduxThunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();

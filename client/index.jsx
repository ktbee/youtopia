import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import VideoList from './components/VideoList';
import './styles.css';

const App = () => {
    return (
        <div className="videoList">
            <VideoList />
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

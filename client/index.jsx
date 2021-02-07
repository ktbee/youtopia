import React from 'react';
import ReactDOM from 'react-dom';

import VideoList from './components/VideoList';
import './styles.css';

const App = () => {
    return (
        <div className="videoList">
            <VideoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

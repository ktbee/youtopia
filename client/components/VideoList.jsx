import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RandomWords from 'random-words';
import YouTube from 'react-youtube';

import Video from './Video';

class VideoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: RandomWords(1),
            allVidIDs: [],
            currentVidIDs: []
        };

        this.getAllVidIDs = this.getAllVidIDs.bind(this);
    }

    componentDidMount() {
        this.getAllVidIDs();
    }

    async getAllVidIDs() {
        const { searchTerm } = this.state;
        const { vidIDs } = await (
            await fetch(`api/search/${searchTerm}`)
        ).json();

        this.setState({ currentVidIDs: vidIDs.slice(0,4)});
        this.setState({ allVidIDs: vidIDs.splice(4, vidIDs.length) });
    }

    onVidEnd(event) {
        console.log('video ended', this);

    }

    render() {
        const { currentVidIDs, searchTerm } = this.state;
        const opts = {
            playerVars: {
                controls: 0
            }
        };

        return currentVidIDs.map((id, index) => (
            <Video className="vid" key={index} id={id} opts={opts} onEnd={this.onVidEnd} />
        ));
    }
}

export default VideoList;

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
        this.getSingleVidID = this.getSingleVidID.bind(this);
    }

    componentDidMount() {
        this.getAllVidIDs();
        // get batch of first vids
    }

    async getAllVidIDs() {
        const { searchTerm } = this.state;
        const { vidIDs } = await (
            await fetch(`api/search/${searchTerm}`)
        ).json();

        this.setState({ currentVidIDs: vidIDs.slice(0,4)});
        this.setState({ allVidIDs: vidIDs.splice(4, vidIDs.length) });
    }

    getSingleVidID() {
        const { vidIDs } = this.state;
        const singleID = vidIDs.pop();

        this.setState({ vidIDs });
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

        return currentVidIDs.map(id => (
            <Video className="vid" key={id} id={id} opts={opts} onEnd={this.onVidEnd} />
        ));
    }
}

export default VideoList;

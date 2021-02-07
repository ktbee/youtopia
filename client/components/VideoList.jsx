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
            vidIDs: []
        };

        this.getAllVidIDs = this.getAllVidIDs.bind(this);
        this.getSingleVidID = this.getSingleVidID.bind(this);
    }

    componentDidMount() {
        this.getAllVidIDs();
    }

    async getAllVidIDs() {
        const { searchTerm } = this.state;
        const { vidIDs } = await (
            await fetch(`api/search/${searchTerm}`)
        ).json();
        console.log('vidIDs',vidIDs);
        this.setState({ vidIDs });
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
        const { searchTerm } = this.state;
        const firstVids = [];
        const opts = {
            playerVars: {
                controls: 0
            }
        };

        console.log('test 1', this.getSingleVidID());
        for (let i = 0; i < 4; i++) {
            firstVids.push(this.getSingleVidID());
        }

        return firstVids.map(id => (
            <Video className="vid" id={id} opts={opts} onEnd={this.onVidEnd} />
        ));
    }
}

export default VideoList;

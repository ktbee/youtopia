import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super(props);
    }

    onVidReady(event) {
        event.target.playVideo();
    }

    render() {
        const opts = {
            playerVars: {
                controls: 0
            }
        };

        return (
            <YouTube
                className="vid"
                videoId={this.props.id}
                opts={opts}
                onReady={this.onVidReady}
                onEnd={this.props.onEnd}
            ></YouTube>
        );
    }
}

export default Video;

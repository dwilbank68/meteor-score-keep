import React, { Component, PropTypes } from 'react';
// import AddPlayer from './AddPlayer.jsx';

import {Players} from '../api/players';



class AddPlayer extends Component {

    handleSubmit(e) {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({name: playerName, score: 0});
        }
    }

    render() {
        return (
            <div className="item add-player">
                <form   className="form"
                        onSubmit={this.handleSubmit}>
                    <input  className="form__input"
                            type="text"
                            name="playerName"
                            placeholder="Player name"/>
                    <button className="button">
                        Add Player
                    </button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;
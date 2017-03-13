import React, { Component, PropTypes } from 'react';
import Player from './Player.jsx';
import FlipMove from 'react-flip-move';

class PlayerList extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         'whatever':{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }


    // handleSubmit(e) {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }
    renderPlayers(){
        let players = this.props.players;
        if (players.length === 0){
            return (
                <div className="item">
                    <p className="item__message">
                        Add your first player
                    </p>
                </div>
            )
        } else {
            return players.map( player => {
                return (
                    < Player key={player._id}{...player}/>
                );
            })
        }

    }

    render() {

        return (
            <div className="player-list">
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}

// PlayerList.defaultProps = {};
PlayerList.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
    players:    PropTypes.array.isRequired
//     date:        PropTypes.instanceOf(Date)
};
//
// PropTypes -> array, bool, func, number, object, string, symbol

// PlayerList.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default PlayerList;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class PlayerList extends Component {

    // this.state = {
    //     'whatever':{}
    // }

    // handleSubmit = (e) => {
    //    ...
    //    this.setState({
    //        ...
    //    })
    // }

    // render() {
    //     return (
    //         <div className="player-list">
    //         </div>
    //     );
    // }
// }
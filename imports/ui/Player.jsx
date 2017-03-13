import React, { Component, PropTypes } from 'react';
import {Players} from '../api/players';

class Player extends Component {

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

    render() {
        const {_id, name, score, rank, position} = this.props;
        let itemClassName = `item item--position-${rank}`;
        return (
            <div className={itemClassName}>
                <div className="player">
                    <div>
                        <h3 className="player__name">  {name}   </h3>
                        <p className="player__stats">
                            {position} place - {score} point(s).
                        </p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round"
                                onClick={() => Players.update(
                                    {_id: _id},
                                    {$inc: {score: 1}}
                                )}>
                            +1
                        </button>
                        <button  className="button button--round"
                                 onClick={() => Players.update(
                                     {_id: _id},
                                     {$inc: {score: -1}}
                                 )}>
                            -1
                        </button>
                        <button  className="button button--round"
                                 onClick={() => Players.remove({_id: _id})}>
                            &#x2715;
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

// Player.defaultProps = {};
Player.propTypes = {
    name:   PropTypes.string.isRequired,
    _id:    PropTypes.string.isRequired,
    score:  PropTypes.number.isRequired
};
//
// PropTypes -> array, bool, func, number, object, string, symbol

// Player.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default Player;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class Player extends Component {

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
    //         <div className="player">
    //         </div>
    //     );
    // }
// }
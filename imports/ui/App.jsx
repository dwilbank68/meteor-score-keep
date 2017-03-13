import React, { Component, PropTypes } from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {

    render() {
        const {title, players} = this.props;
        return (
            <div className="app">
                <TitleBar   title={title} subtitle="created by Pog"/>
                <div className="wrapper">
                    <PlayerList players={players}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
}

// App.defaultProps = {};
App.propTypes = {
    title:        PropTypes.string.isRequired,
    players:        PropTypes.array.isRequired
};
//
// PropTypes -> array, bool, func, number, object, string, symbol

// App.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

export default App;

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')







//////////////// alternative using ES2016 Property Initializer ////////////////

// no more constructor - no more 'this' binding required

// class App extends Component {

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
    //         <div className="app">
    //         </div>
    //     );
    // }
// }
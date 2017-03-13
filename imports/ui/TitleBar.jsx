import React, { Component, PropTypes } from 'react';

class TitleBar extends Component {

    renderSubtitle(){
        if (this.props.subtitle) {
            return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
        }
    }

    render() {
        const {title} = this.props;
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>   {title}    </h1>
                    {this.renderSubtitle()}
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title:      PropTypes.string.isRequired,
    subtitle:   PropTypes.string.isRequired
};

export default TitleBar;
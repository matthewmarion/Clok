import React from 'react';

const ActiveClient = (props) => {
    return (
        <h3>{props.activeClient}</h3>
    );
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='header-wrapper'>
                <ActiveClient activeClient={this.props.activeClient}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		activeClient: state.activeClient
	};
};

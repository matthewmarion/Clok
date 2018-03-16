import React from 'react';
import {connect} from 'react-redux';


const ActiveClient = (props) => {
    let activeClient = (props.activeClient == '') ? 'Select a client.' : props.activeClient;
    return (
        <h3>{activeClient}</h3>
    );
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='header-wrapper'>
                <ActiveClient activeClient={this.props.clients.activeClient}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		clients: state.clients
	};
};

export default connect(mapStateToProps)(Header);
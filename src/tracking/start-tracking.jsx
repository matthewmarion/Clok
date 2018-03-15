import React from 'react';

const TrackButton = (props) => {
	let button;
	switch(props.tracking) {
	case true:
		button = <button onClick={props.onClick} className="enabled">Stop</button>;
		break;
	case false:
		button = <button onClick={props.onClick} className="disabled">Start</button>;
		break;
	}
	return (
		<div>
			{button}
		</div>
	);
};

const PauseButton = (props) => {

};

const Time = (props) => {
	return (
		<h3>{props.currentTime}</h3>
	);
};

class TrackingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tracking: false,
			currentTime: 0
		};
		this.timer = null;
		this.toggleTracking = this.toggleTracking.bind(this);    }

	toggleTracking() {
		this.setState(prevState => ({
			tracking: !prevState.tracking
		}));
		if (this.state.tracking) {
			this.stopTracking();
			return;
		}
		this.startTracking();
	}
	startTracking() {
		this.timer = setTimeout(() => {
			this.incrementTimer();
			this.startTracking();
		}, 1000);
	}

	stopTracking() {
		clearTimeout(this.timer);
		this.setState({
			tracking: false,
			currentTime: 0
		});
	}

	incrementTimer() {
		this.setState(prevState => ({
			currentTime: ++prevState.currentTime
		}));
	}

	render() {
		return (
			<div>
				<TrackButton tracking={this.state.tracking} onClick={this.toggleTracking}/>
				<Time currentTime={this.state.currentTime}/>
			</div>
		);
	}
}

export default TrackingForm;
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import MainContent from './main-content';

class App extends React.Component {
	render() {
		return (
			<div>
				<Sidebar />
				<MainContent />
			</div>
		);
	}
}

export default App;

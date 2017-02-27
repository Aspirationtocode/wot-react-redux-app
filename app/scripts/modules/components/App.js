import React from 'react';
import FlexContainer from './FlexContainer';
import Poster from './Poster';


class App extends React.Component {
	render() {
		return (
			<FlexContainer fullHeight justifyContent='center' alignItems="center">
				<Poster />
			</FlexContainer>
		)
	}
};

export default App;

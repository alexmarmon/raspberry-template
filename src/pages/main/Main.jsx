import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppState from '../../state/AppState';

@observer

class App extends Component {

  componentDidMount = () => {
    // err
  }

  render() {
    const app = this.props.appState;
    return (
      <div className="content">
        <div id="header" className="header">
          <h2>Christmas Tree :)</h2>
        </div>
        <div onClick={app.toggle} className="toggleButton">
          <p className="toggleButtonText">Toggle Lights</p>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  appState: React.PropTypes.instanceOf(AppState),
};

export default App;

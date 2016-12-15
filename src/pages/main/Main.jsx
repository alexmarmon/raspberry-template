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
      <div>
        <div id="header" className="header">
          <h2>Raspberry</h2>
          <h4>A simple start.</h4>
          <h4>Main Page</h4>
        </div>
        <button onClick={app.toggle}>
          Toggle LED
        </button>
      </div>
    );
  }
}

App.propTypes = {
  appState: React.PropTypes.instanceOf(AppState),
};

export default App;

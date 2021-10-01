import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {
  // We can initialize state this way on in the #constructor() using this.state = { ... }
  // The code below is actually syntax sure to awoid setting initial state state (>_<) in the #constructor()
  state = { lat: null, errorMessage: '' };

  // Always prefer to make initial API calls in #componentDidMount() lifecycle method
  // instead of making them in the constructor
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Always call setState() to change the state
      position =>  this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  // prefer to place any conditional logic to separate helper function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request" />
  }
  
  // presence of #render() function is mandatory for React components
  render() { 
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

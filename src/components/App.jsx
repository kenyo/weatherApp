import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'node-fetch'

// import App from './components/App'

// take raw JSON output from aeris API and transform into abridged
// periods array
function transformWeatherData(resp) {
  return resp.response.periods.map(x => ({
    timestamp: x.timestamp,
    maxTempC: x.maxTempC,
    maxTempF: x.maxTempF,
    minTempC: x.minTempC,
    minTempF: x.minTempF,
  }))
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    fetch('/api/weather')
      .then(transformWeatherData)
      .then(data => this.setState({periods: data}))
      .catch(console.log)
  }

  render() {
    return (<div>

    </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('root'))

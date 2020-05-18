import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const format = {
  minutes: (x) => {
    if (Number.isNaN(x)) {
      return '—'
    }

    const minutes = Math.floor(x)
    const seconds = (x % 1) * 60
    return `${minutes}m ${seconds.toFixed(0).padStart(2, '0')}s`
  },
  milesPerHour: (x) => {
    if (Number.isNaN(x)) {
      return '—'
    }

    return `${x.toFixed(2)} mph`
  },
}

function App() {
  const [distance, setDistance] = useState('1.2')
  const [time, setTime] = useState('3:35')

  const milesPerMinute = parseFloat(distance, 10) / (parseSeconds(time) / 60)

  return <div>
    <h3>Inputs</h3>
    <div>
      <label htmlFor="lsdaeb">Distance (in miles)</label>
    </div>
    <div>
      <input
        name="distance"
        id="lsdaeb"
        type="text"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="eretret">Time (colon-delimited, ending in seconds)</label>
    </div>
    <div>
      <input
        name="time"
        id="eretret"
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
    </div>
    <h3>Results</h3>
    <table>
      <tbody>
        <tr>
          <th>Figure</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Speed</td>
          <td>{format.milesPerHour(milesPerMinute * 60)}</td>
        </tr>
        <tr>
          <td>Pace</td>
          <td>{format.minutes(1 / milesPerMinute)}</td>
        </tr>
      </tbody>
    </table>
  </div>
}

function parseSeconds(timeString) {
  const parts = timeString.split(':').map((x) => parseInt(x, 10))
  if (parts.length !== 2) {
    return NaN
  }

  const seconds = parts[0] * 60 + parts[1]
  return seconds
}

ReactDOM.render(<App />, document.getElementById('root'))

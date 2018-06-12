import React from 'react'
import Result from './Result';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  outputResults() {
    let list = []
    for (var value of this.props.artistData) {
      //TODO:  <Result title={value["title"] chordsPresent={value["chordsPresent"]} />}
      list.push(<span>Title: {value["title"]}, Chords Available: {value["chordsPresent"]}</span>)
    }
    return list
  }


  render() {
    if (this.props.artistData !== null) {
      return (
        <div style={{display: 'flex', 'flex-direction': 'column'}}>
          { this.outputResults() }
        </div>
      )
    } else {
      return (
        <div>Submit your request!</div>
      )
    }
  }
}

export default Results

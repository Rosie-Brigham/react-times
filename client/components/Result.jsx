import React from 'react'

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>Title: {this.props.title}</span>
        <span>Chords Available: {this.props.chordsPresent}</span>
      </div>
    )
  }
}

export default Result

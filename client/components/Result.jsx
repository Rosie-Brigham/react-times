import React from 'react'

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      { for (var value of this.state.artistData) {
          var node = document.createElement("LI");
          var textnode = document.createTextNode("Title: " + value["title"] + " Chords Available: " + value["chordsPresent"]);
          node.appendChild(textnode);
          result.appendChild(node);
        }}
      </div>
    )
  }
}

export default Result

import React from 'react'
import axios from 'axios';
import Result from './Result';

class SongForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      artistData: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let artistToSearch = this.refs.content.value

    axios.get('http://www.songsterr.com/a/ra/songs/byartists.json?artists=' + artistToSearch)
      .then(response => {
        var result = document.getElementById('result')
        this.setState({'artistData': response['data']})
        console.log(this)
        for (var value of response['data']) {

          var node = document.createElement("LI");
          var textnode = document.createTextNode("Title: " + value["title"] + " Chords Available: " + value["chordsPresent"]);
          node.appendChild(textnode);
          result.appendChild(node);
        }
      })
      .catch(function (error) {
        alert("Oh Whoopsies, there seems to have been an error " + error);
      });
  }

  render() {
    return (
      <div className="commentForm">
        <form name="comment" id="comment" onSubmit={this.onSubmit.bind(this)}>
          <textarea className="commentText" ref="content" rows="10" placeholder="Comment"></textarea>
          <button id="submit" type="submit">Add Value</button>
        </form>
        <div id="result"> </div>
        <Result artistData={this.state.artistData} />
      </div>
    );
  }
}

export default SongForm

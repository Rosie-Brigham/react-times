import React from 'react'
import axios from 'axios';
import Results from './Results';

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
        this.setState({'artistData': response['data']})
        this.setState({'submitted': true})
      })
      .catch(function (error) {
        alert("Oh Whoopsies, there seems to have been an error " + error);
      });
  }

  renderForm() {

    return (
      <form style={{display: 'flex', 'justify-content': 'space-evenly'}} name="comment" id="comment" onSubmit={this.onSubmit.bind(this)}>
        <textarea className="commentText" ref="content" rows="10" placeholder="Comment"></textarea>
        <button id="submit" type="submit">Add Value</button>
      </form>
    )
  }


  render() {
    if (this.state.submitted == true) {
      return (
        <div className="commentForm">
          {this.renderForm()}
          <Results artistData={this.state.artistData} />
        </div>
      )
    } else {
      return (
        <div className="commentForm">
          {this.renderForm()}
        </div>
      );
    }
  }
}

export default SongForm

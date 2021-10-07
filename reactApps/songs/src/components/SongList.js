import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">
            {song.title}
          </div>
        </div>
      ) 
    })
  }

  render() {
    return(
      <div className="ui divided list ">
        {this.renderList()}
      </div>
    )
  }
}

// Convention name for getting needed data from state
const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

export default connect(
  mapStateToProps,
  // just selectSong will be the same because of new JS syntax
  { selectSong: selectSong }
)(SongList)

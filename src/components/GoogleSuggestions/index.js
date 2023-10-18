// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  deleteUser = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-color">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="bg-container">
            <div className="input-text-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon-size"
              />
              <input
                type="search"
                placeholder="Search by Google"
                className="input-bar"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.length === 0 ? (
                <p className="error">No Results Found </p>
              ) : (
                searchResults.map(eachItem => (
                  <SuggestionItem
                    suggestionDetails={eachItem}
                    key={eachItem.id}
                    deleteUser={this.deleteUser}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

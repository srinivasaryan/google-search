// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, deleteUser} = props
  const {suggestion} = suggestionDetails

  const onDelete = () => {
    deleteUser(suggestion)
  }

  return (
    <li className="list-items">
      <p>{suggestion}</p>
      <button className="button-icon" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem

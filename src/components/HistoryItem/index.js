import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteButtonHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDeleteButton = () => {
    onDeleteButtonHistory(id)
  }

  return (
    <div>
      <li className="history-details">
        <div className="time-accessed">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="app-details-container">
            <div className="app-details">
              <p className="app-name">{title}</p>
              <p className="app-url">{domainUrl}</p>
            </div>
            <div className="button-container">
              <button
                data-testid="delete"
                className="delete-button"
                type="button"
                onClick={onDeleteButton}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete"
                />
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default HistoryItem

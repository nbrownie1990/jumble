//https://github.com/voronianski/react-star-rating-component

import React from 'react'
import ReactDOM from 'react-dom'
import StarRatingComponent from 'react-star-rating-component'

class Star extends React.Component {
  constructor() {
    super()

    this.state = {
      rating: 3,
    }
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue })
  }

  render() {
    const { rating } = this.state
    return (
      <div>
        <p>Deine Bewertung: {rating}</p>
        <StarRatingComponent
          name="rate1"
          renderStarIcon={() => (
            <span>
              <i className="fas fa-star" aria-hidden="true"></i>
            </span>
          )}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'))

export default Star

import React from 'react'
import './index.css'
import { TSuggestions } from '../types'

const Suggestions = ({ suggestions, highlight }: TSuggestions) => {
  return (
    <div className="suggestionsBox">
      {suggestions.map(({ id, title }) => (
        <div key={id} className="suggestion">
          <div className="highlight">
            {title.substring(0, highlight.lastIndexOf(''))}
          </div>
          <div>
            {title.substring(highlight.lastIndexOf(''), title.lastIndexOf(''))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { Suggestions }

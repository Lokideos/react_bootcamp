import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  // static adds method/parameter directly to the class
  // static contextType = LanguageContext
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value) }
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button

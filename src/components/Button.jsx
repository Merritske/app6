import React from 'react'
import  PropTypes from 'prop-types'

export default function Button({color, text, click}) {
  return (
    <div>
<button
onClick={click}
style={{backgroundColor: color}}
className="btn"
>
    {text}
</button>
    </div>
  )
}
Button.defaultProps = {
color: "red",
text: "button"
}
Button.propTypes = {
    color : PropTypes.string,
    text: PropTypes.string,
    click: PropTypes.func
}
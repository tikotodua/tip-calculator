import React from 'react'
import Styles from './SubmitButton.module.css'

export default function SubmitButton(props) {
  return (
    <button className={Styles.SubmitButton} onClick={props.onClick}>Reset</button>
  )
}

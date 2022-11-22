import React from 'react'
import Styles from './Button.module.css'

export default function Button(props) {
  return (
    <button className={Styles.CalcButton} value={props.value} title={props.title} onClick={props.onClick}>{`${props.value}%`}</button>
  )
}

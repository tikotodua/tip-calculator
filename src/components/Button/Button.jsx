import React from 'react'
import Styles from './Button.module.css'

export default function Button(props) {
  return (
    <input type='button' value={`${props.title}%`} className={Styles.CalcButton} title={props.title}/>
  )
}

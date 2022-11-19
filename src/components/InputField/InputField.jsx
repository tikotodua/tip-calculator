import React from 'react'
import Styles from './InputField.module.css'

export default function InputField(props) {
  return (
    <div className={Styles.inputField}>
        <label className={Styles.inputFieldLabel}>{props.inputFieldLabel}</label>
        <div className={Styles.inputFieldWrap}>
            <img className={Styles.inputFieldIcon} src={props.src} alt="input-icon"></img>
            <input type="text" className={Styles.inputFieldText} onChange={props.onChange} title={props.title} />
        </div>
    </div>
  )
}

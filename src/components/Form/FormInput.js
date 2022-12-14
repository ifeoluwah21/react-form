import React from 'react'


import styles from "./FormInput.module.css"
function FormInput(props) {
    return (
        <div className={styles["form-control"]}>
            <label htmlFor={props.label}>{props.title}</label>
            <input value={props.value} onChange={props.onChange} type={props.type} name={props.label} id={props.label} />
        </div>
    )
}

export default FormInput
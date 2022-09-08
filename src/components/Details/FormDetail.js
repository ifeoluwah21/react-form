import React from 'react';

import styles from "./FormDetail.module.css";

function FormDetail(props) {
    const clickHandler = event => {
        props.onSelectUser(props.userDetails.id)
    }
    return (
        <li onClick={clickHandler} className={styles.detail}>{`${props.userDetails.username} (${props.userDetails.age} years old)`}</li>
    )
}

export default FormDetail
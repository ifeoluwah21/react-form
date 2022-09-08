import React from 'react';

import styles from "./FormDetail.module.css";

function FormDetail(props) {
    return (
        <p className={styles.detail}>{`${props.username} (${props.age} years old)`}</p>
    )
}

export default FormDetail